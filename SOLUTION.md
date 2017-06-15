Song
`title`, `artist_id`, `album_id`
belongs_to artist, belongs_to album

Album
`artist_id`
belongs_to artist
has_many songs

Artist
`name`, `label_id`
belongs_to label
has_many albums, songs

Record Label
has_many artists
