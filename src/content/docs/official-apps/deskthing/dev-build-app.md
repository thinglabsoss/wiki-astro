---
title: DeskThing Client API Reference
description: Documentation for the DeskThing client-side JavaScript API
---

# DeskThing Client API Reference

[Go Back](./deskthing.md)

## Core Interfaces

### SocketData
Interface for socket communication data:

export interface SocketData {
    app?: string;
    type?: string;
    request?: string;
    payload?: any; // Used for arbitrary data payloads
}

### AppTypes
Type for application categories:

export type AppTypes = 'client' | 'server' | string;

### EventTypes
Available event types:

export type EventTypes = 'get' | 'set' | 'message' | 'log' | 'error' | 'data' | 'apps' | 'message' | 'music' | 'settings' | string;

## Music Integration

### SongData
Interface for music playback data:

export type SongData = {
    album: string | null;
    artist: string | null;
    playlist: string | null;
    playlist_id: string | null;
    track_name: string;
    shuffle_state: boolean | null;
    repeat_state: 'off' | 'all' | 'track';
    is_playing: boolean;
    can_fast_forward: boolean; // Whether or not there an an option to 'fastforward 30 sec'
    can_skip: boolean;
    can_like: boolean;
    can_change_volume: boolean;
    can_set_output: boolean;
    track_duration: number | null;
    track_progress: number | null;
    volume: number; // percentage 0-100
    thumbnail: string | null; //base64 encoding that includes data:image/png;base64, at the beginning
    device: string | null; // Name of device that is playing the audio
    id: string | null; // A way to identify the current song (is used for certain actions)
    device_id: string | null; // a way to identify the current device if needed
}

### Audio Requests
Available audio control requests:

export enum AUDIO_REQUESTS {
    NEXT = "next",
    PREVIOUS = "previous",
    REWIND = "rewind",
    FAST_FORWARD = "fast_forward",
    PLAY = "play",
    PAUSE = "pause",
    SEEK = "seek",
    LIKE = "like",
    SONG = "song",
    VOLUME = "volume",
    REPEAT = "repeat",
    SHUFFLE = "shuffle"
}

## App Configuration

### Manifest
Interface for app manifest configuration:

export interface Manifest {
    isAudioSource: boolean;
    requires: Array<string>;
    label: string;
    version: string;
    description?: string;
    author?: string;
    id: string;
    isWebApp: boolean;
    isLocalApp: boolean;
    platforms: Array<string>;
    homepage?: string;
    repository?: string;
}

### App
Interface for app instance data:

export interface App {
    name: string;
    enabled: boolean;
    running: boolean;
    prefIndex: number;
    manifest?: Manifest;
}

## Settings Types

### Settings Interfaces
Available settings type interfaces:

export interface SettingsNumber {
    value: number;
    type: 'number';
    min: number;
    max: number;
    label: string;
    description?: string;
}

export interface SettingsBoolean {
    value: boolean;
    type: 'boolean';
    label: string;
    description?: string;
}

export interface SettingsString {
    value: string;
    type: 'string';
    label: string;
    description?: string;
}

export interface SettingsSelect {
    value: string;
    type: 'select';
    label: string;
    description?: string;
    options: {
        label: string;
        value: string;
    }[];
}

export interface SettingsMultiSelect {
    value: string[];
    type: 'multiselect';
    label: string;
    description?: string;
    options: {
        label: string,
        value: string;
    }[];
}

Combined settings type:

export type SettingsType = SettingsNumber | SettingsBoolean | SettingsString | SettingsSelect | SettingsMultiSelect;

App settings collection:

export interface AppSettings {
    [key: string]: SettingsType;
}

## DeskThing Class

The main DeskThing class provides methods for interacting with the DeskThing application:

### Methods

#### getInstance()
Returns the singleton instance of DeskThing.

static getInstance(): DeskThing

#### on()
Registers an event listener.

on(event: EventTypes, callback: EventCallback): () => void

#### off()
Removes an event listener.

off(event: EventTypes, callback: EventCallback): void

#### sendMessageToParent()
Sends a message to the parent window.

sendMessageToParent(data: SocketData): void

### Usage Example

const deskThing = DeskThing.getInstance();

// Listen for messages
const removeListener = deskThing.on('message', (data) => {
    console.log('Received message:', data);
});

// Send a message
deskThing.sendMessageToParent({
    app: 'client',
    type: 'action',
    payload: { buttonClicked: 'submit' }
});

// Remove listener when done
removeListener();


## Server-Side Implementation

The DeskThing server provides additional functionality for handling data persistence, system events, and background tasks:

### Server Methods

#### loadManifest()
Loads the application manifest file.

private loadManifest(): void

#### getManifest()
Returns the manifest in a Response structure.

getManifest(): Response

#### start()
Initializes the server-side functionality.

async start({ toServer, SysEvents }: startData): Promise<Response>

#### stop()
Stops background tasks and cleans up resources.

async stop(): Promise<Response>

#### purge()
Clears all cached data and stops background tasks.

async purge(): Promise<Response>

### Server Events

The server emits various events that can be listened to:

- 'start': Emitted when the server starts
- 'stop': Emitted when the server stops
- 'purge': Emitted when cache is cleared
- 'data': Emitted when data is updated
- 'config': Emitted when configuration changes
- 'input': Emitted when user input is received

### Usage Example


const deskThing = DeskThing.getInstance();

// Start the server
await deskThing.start({
    toServer: (data) => {
        // Handle outgoing data
    },
    SysEvents: (event, listener) => {
        // Handle system events
        return () => {
            // Cleanup function
        };
    }
});

// Listen for server events
deskThing.on('start', () => {
    console.log('Server started');
});

// Stop the server
await deskThing.stop();


### Background Tasks

The server supports running background tasks that continue until explicitly stopped:


const cancelTask = deskThing.addBackgroundTaskLoop(async () => {
    // Perform periodic task
    await someAsyncOperation();
    return false; // Return false to continue loop
});

// Later, stop the task
cancelTask();


### Data Persistence

The server handles data persistence and caching:


// Save data
deskThing.saveData({
    settings: {
        theme: {
            type: 'string',
            value: 'dark',
            label: 'Theme'
        }
    }
});

// Get cached data
const data = await deskThing.getData();


### System Events

The server can listen for system-level events:


const removeListener = deskThing.onSystem('config', (config) => {
    console.log('System configuration changed:', config);
});

// Later, remove the listener
removeListener();
