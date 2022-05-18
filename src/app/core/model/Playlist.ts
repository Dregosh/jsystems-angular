
interface Track {
  id: string;
  name: string;
  type: "track";
}


export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: Track[]
}

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

