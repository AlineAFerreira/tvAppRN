import React, {useState, useRef, forwardRef} from 'react';
import {TouchableHighlight, View} from 'react-native';

const FocusableHighlight = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableHighlight
      {...props}
      ref={ref}
      onPress={(event) => {
        if (props.onPress) {
          props.onPress(false);
        }
      }}
      onFocus={(event) => {
        setFocused(true);
        if (props.onFocus) {
          props.onFocus(event);
        }
      }}
      onBlur={(event) => {
        setFocused(false);
        if (props.onBlur) {
          props.onBlur(event);
        }
      }}
      style={[
        props.style,
        focused && {
          backgroundColor: props.underlayColor,
          opacity: props.activeOpacity,
          borderColor: '#FFF'
        },
        focused && props.styleFocused,
        pressed && props.stylePressed,
      ]}>
      {props.children || <View />}
      
    </TouchableHighlight>
  );
});

export default FocusableHighlight;
