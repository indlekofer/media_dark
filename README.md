# @indlekofer/media_dark

## Usage

```js
import GET_DARK, { REDUCER as MEDIA_REDUCER } from '@indlekofer/media_dark';

const mapStateToProps = (state) => {
  return {
    mediaDark: state[MEDIA_REDUCER].get(GET_DARK) //mediaDark -> true|false|null
  }
}

```

## Function exports

### setup

### unset

### config

## Constant exports

### REDUCER

### GET_DARK (default)
