
export const TILE_SIZE = 24; // Pixels per tile
export const GRID_WIDTH = 28;
export const GRID_HEIGHT = 31;
export const FPS = 60;
export const FRAME_TIME = 1000 / FPS;

// Colors
export const COLORS = {
  WALL: '#1919A6',
  WALL_BOSS: '#8B0000',
  PELLET: '#FFB8AE',
  POWER_PELLET: '#FFB8AE',
  PACMAN: '#FFFF00',
  GHOST_RED: '#FF0000',
  GHOST_PINK: '#FFB8FF',
  GHOST_CYAN: '#00FFFF',
  GHOST_ORANGE: '#FFB852',
  GHOST_PURPLE: '#9900FF',
  GHOST_BOSS: '#333333',
  GHOST_MINI_BOSS: '#550000',
  GHOST_WHITE: '#FFFFFF',
  BOSS_SWORD: '#FF00FF',
  BOSS_SCYTHE: '#FF4400',
  SHIELD: '#00FF00',
  LAVA: '#CF1020',
  SPIKE: '#AAAAAA',
  SWORD_ITEM: '#00FFFF',
  PROJECTILE: '#FFFF00',
  LASER: '#FF0000',
  PHANTOM_WALL: '#9370DB', // Medium Purple
  TIMED_SPIKE_SAFE: '#333333',
};

// Gameplay
export const BASE_SPEED = 3.5; // Tiles per second (approx)
export const GHOST_SPEED = 2.2; // Adjusted for slower, creepy hunting feel
export const BOSS_SPEED = 6.2; // Increased for higher difficulty
export const MINI_BOSS_SPEED = 4.5; 
export const PROJECTILE_SPEED = 10.0;

export const PELLET_POINTS = 10;
export const POWER_PELLET_POINTS = 50;
export const GHOST_EAT_POINTS = 200;

export const BOSS_MAX_HP = 4650; // Decreased by 7% (5000 -> 4650)
export const MINI_BOSS_MAX_HP = 1500;
export const PLAYER_MAX_HP_BOSS = 1477;
export const PLAYER_MAX_HP_MINI_BOSS = 1477;

export const EXECUTE_CHANCE = 0.15;
export const EXECUTE_DAMAGE = 9999;
export const SWORD_DAMAGE = 1250; // Increased damage
export const SCYTHE_DAMAGE = 950; // Increased damage
export const BOSS_CONTACT_DAMAGE = 400; // Increased damage
export const HAZARD_DAMAGE = 100;
export const MINI_BOSS_CONTACT_DAMAGE = 150; // Increased to 10x base
export const PLAYER_SWORD_DAMAGE = 50;

// Level 30 Mechanics
export const BOW_DAMAGE = 200;
export const BOW_COOLDOWN = 600; // ms
export const SHIELD_COOLDOWN = 15000; // 15s
export const SHIELD_DURATION = 2000; // 2s active time
export const BOSS_DODGE_COOLDOWN = 25000; // 25s
export const BOSS_INVIS_DURATION = 9000; // 7-9s
export const BOSS_INVIS_INTERVAL = 30000; // 30s
export const BOSS_TELEGRAPH_TIME = 800; // ms
export const VOID_WALKER_TELEPORT_INTERVAL = 35000; // 35s
export const VOID_WALKER_TELEPORT_DIST = 10; // tiles
