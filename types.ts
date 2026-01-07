
export enum Direction {
  NONE = 0,
  UP = 1,
  DOWN = 2,
  LEFT = 3,
  RIGHT = 4,
}

export enum GameState {
  MENU = 'MENU',
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  GAME_OVER = 'GAME_OVER',
  VICTORY = 'VICTORY',
  LEVEL_TRANSITION = 'LEVEL_TRANSITION',
  CUTSCENE = 'CUTSCENE',
}

export enum EntityType {
  PLAYER = 'PLAYER',
  GHOST = 'GHOST',
  BOSS = 'BOSS',
  PROJECTILE = 'PROJECTILE',
  MINION = 'MINION',
  HAZARD = 'HAZARD',
}

export enum GhostType {
  CHASER = 'CHASER',   // Red
  PREDICTOR = 'PREDICTOR', // Pink
  WANDERER = 'WANDERER', // Orange
  PATROL = 'PATROL',   // Cyan
  VOID_WALKER = 'VOID_WALKER', // Purple/Teleporter
  EXECUTIONER = 'EXECUTIONER', // Black/Boss
  MINI_BOSS = 'MINI_BOSS', // Level 10 Boss
  WHITE_GHOST = 'WHITE_GHOST', // Cinematic Boss
}

export enum TileType {
  EMPTY = 0,
  WALL = 1,
  PELLET = 2,
  POWER_PELLET = 3,
  GATE = 4,
  TRAP = 5,
  LAVA = 6,
  SPIKE = 7,
  SWORD = 8,
  LASER_H = 9,
  LASER_V = 10,
  PHANTOM_WALL = 11,
  TIMED_SPIKE = 12,
}

export interface Vector2 {
  x: number;
  y: number;
}

export interface LevelData {
  map: number[][];
  ghosts: GhostType[];
  isBossLevel: boolean;
}

export interface PlayerStats {
  score: number;
  highScore: number;
  lives: number;
  level: number;
  health: number;
  maxHealth: number;
  hasShield: boolean;
  hasSword: boolean;
  speedBoostTime: number;
  invulnerableTime: number;
  hiddenLevelsUnlocked: boolean;
  shieldCooldown: number;
  bowCooldown: number;
  bossHealth: number;
  bossMaxHealth: number;
  // New Save Fields
  cheatsEnabled: boolean;
  powerPelletTime: number;
  experimentalActive: boolean;
  lastBossDodgeTime: number;
}

export interface SaveData {
  stats: PlayerStats;
  timestamp: number;
}
