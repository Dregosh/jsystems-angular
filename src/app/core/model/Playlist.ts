
interface Track {
  id: string;
  name: string;
  type: "track";
  duration_ms: number
}

interface Episode {
  id: string;
  name: string;
  type: "episode";
  duration_ms: number
}


export interface Playlist {
  id: string;
  name: string;
  type: "playlist";
  public: boolean;
  description: string;
  tracks?: Track[]
}


function showInfo3(res: Playlist | Track | Episode) {
  switch (res.type) {
    case 'episode':
      return `${res.duration_ms}`;
    case 'track':
      return `${res.duration_ms}`;
    case 'playlist':
      return `${res.name} (${res.tracks?.length ?? 0} tracks)`
    default:
      checkExhaustivness(res)
  }
}

function showInfo2(res: Playlist | Track | Episode) {
  if (res.type === 'episode') {
    return `${res.duration_ms}`
  }
  if (res.type === 'track') {
    return `${res.duration_ms}`
  }
  if (res.type === 'playlist') {
    return `${res.name} (${res.tracks?.length ?? 0} tracks)`
  }
  checkExhaustivness(res)
}


function showInfo(res: Playlist | Track | Episode) {
  if ('duration_ms' in res) {
    return `${res.duration_ms}`
  }
  if ('public' in res) {
    return `${res.name} (${res.tracks?.length ?? 0} tracks)`
  }
  checkExhaustivness(res)
}


function getInfo(s: string | number | boolean) {
  if (typeof s === 'string') {
    return s.toLocaleLowerCase()
  } else if (typeof s === 'number') {
    return s.toFixed(2)
  } else if (typeof s === 'boolean') {
    return s ? 'yes' : 'no'
  } else {
    // const _never: never = s // never
    // throw new Error('Unexpected result')
    checkExhaustivness(s)
  }
}

function checkExhaustivness(res: never): never {
  throw new Error('Unexpected result')
}

function neverEndingStory(): never {
  while (true) { }
}
// neverEndingStory()
// const x = 1 // Unreachable code detected

// const p = {} as any

const p = {} as Playlist

if (p.tracks) {
  const len = p.tracks.length
}
const len1 = p.tracks?.length // number | undefined
const len2 = (p.tracks as Track[]).length // number ?
const len3 = p.tracks!.length // number ?

const len4 = p.tracks ? p.tracks.length : 0
const len5 = p.tracks?.length ?? 0
const len6 = p.tracks?.length || 0

