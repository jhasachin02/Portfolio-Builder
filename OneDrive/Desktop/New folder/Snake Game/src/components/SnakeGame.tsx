import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Position = {
  x: number;
  y: number;
};

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const BOARD_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 15, y: 15 };
const GAME_SPEED = 150;

export const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const generateFood = useCallback((): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection('RIGHT');
    setScore(0);
    setGameOver(false);
    setIsGameRunning(false);
  };

  const checkCollision = (head: Position): boolean => {
    // Wall collision
    if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
      return true;
    }
    // Self collision
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
  };

  const moveSnake = useCallback(() => {
    if (!isGameRunning || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      if (checkCollision(head)) {
        setGameOver(true);
        setIsGameRunning(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, isGameRunning, gameOver, food, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isGameRunning) return;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          setDirection(prev => prev !== 'DOWN' ? 'UP' : prev);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setDirection(prev => prev !== 'UP' ? 'DOWN' : prev);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          setDirection(prev => prev !== 'RIGHT' ? 'LEFT' : prev);
          break;
        case 'ArrowRight':
          e.preventDefault();
          setDirection(prev => prev !== 'LEFT' ? 'RIGHT' : prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isGameRunning]);

  useEffect(() => {
    if (!isGameRunning) return;

    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [moveSnake, isGameRunning]);

  const startGame = () => {
    if (gameOver) {
      resetGame();
    }
    setIsGameRunning(true);
  };

  const pauseGame = () => {
    setIsGameRunning(false);
  };

  const getCellContent = (x: number, y: number) => {
    // Check if this position is the snake head
    if (snake[0] && snake[0].x === x && snake[0].y === y) {
      return 'snake-head';
    }
    // Check if this position is part of the snake body
    if (snake.slice(1).some(segment => segment.x === x && segment.y === y)) {
      return 'snake-body';
    }
    // Check if this position is food
    if (food.x === x && food.y === y) {
      return 'food';
    }
    return 'empty';
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4 sm:p-6 min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-2">Snake Game</h1>
        <div className="text-2xl font-semibold text-foreground">Score: {score}</div>
      </div>

      <Card className="p-2 sm:p-6 bg-card/80 backdrop-blur-sm border-border shadow-lg w-full max-w-[90vw] sm:max-w-[500px]">
        <div 
          className="grid gap-[1px] bg-game-grid p-1 sm:p-4 rounded-lg w-full max-w-full aspect-square"
          style={{ 
            gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
            backgroundColor: 'hsl(var(--game-board))'
          }}
        >
          {Array.from({ length: BOARD_SIZE }, (_, y) =>
            Array.from({ length: BOARD_SIZE }, (_, x) => {
              const cellType = getCellContent(x, y);
              return (
                <div
                  key={`${x}-${y}`}
                  className={`
                    w-4 h-4 sm:w-5 sm:h-5 rounded-sm transition-all duration-100
                    ${cellType === 'snake-head' ? 'bg-game-snake-head animate-pulse-glow' : ''}
                    ${cellType === 'snake-body' ? 'bg-game-snake-body' : ''}
                    ${cellType === 'food' ? 'bg-game-food animate-food-pulse rounded-full' : ''}
                    ${cellType === 'empty' ? 'bg-game-board hover:bg-game-grid/50' : ''}
                  `}
                />
              );
            })
          )}
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-center w-full">
        {!isGameRunning && !gameOver && (
          <Button onClick={startGame} className="bg-primary hover:bg-primary/90">
            Start Game
          </Button>
        )}
        {isGameRunning && (
          <Button onClick={pauseGame} variant="secondary">
            Pause
          </Button>
        )}
        {!isGameRunning && !gameOver && snake.length > 1 && (
          <Button onClick={startGame} className="bg-primary hover:bg-primary/90">
            Resume
          </Button>
        )}
        {gameOver && (
          <div className="text-center">
            <div className="text-xl font-semibold text-destructive mb-2">Game Over!</div>
            <Button onClick={startGame} className="bg-primary hover:bg-primary/90">
              Play Again
            </Button>
          </div>
        )}
        <Button onClick={resetGame} variant="outline">
          Reset
        </Button>
      </div>

      {!gameOver && (
        <div className="text-center text-muted-foreground">
          <p>Use arrow keys to control the snake</p>
          <p className="text-sm">Eat the red food to grow and increase your score!</p>
        </div>
      )}
    </div>
  );
};