# Audio Player

Used to play audio. It must be played via the script [audioPlayer.play()](https://github.com/Withered-Flower-0422/BST/blob/main/_Typings/gameApi/types/itemComponents/audioPlayer.d.ts).

## [Transform Offset](item#Transform-Offset)

## `Audio File`

- Type: `Audio`
- Default: Empty

## `Loop`

- Type: `bool`
- Default: `false`

## `Volume`

- Type: `float`
- Default: `1.0`
- Range: `0.0` ~ `1.0`

## `Spatialize Audio`

- Type: `bool`
- Default: `false`

Spatial audio has stereo sound and the Doppler effect.

## `Min Distance`

- Type: `float`
- Default: `5.0`
- Range: `0.0` ~ `100.0`

When the distance between the camera and the audio source is greater than the `Min Distance`, the volume begins to fall off.

## `Max Distance`

- Type: `float`
- Default: `20.0`
- Range: `0.0` ~ `100.0`

When the distance between the camera and the audio source is greater than the `Max Distance`, the sound cannot be heard.
