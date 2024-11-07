import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardDidShow = () => {
  const [keyboardDidShow, setKeyboardDidShow] = useState<boolean>(false);

  useEffect(() => {
    const didShow = Keyboard.addListener('keyboardDidShow', _onKeyboardDidShow);
    const didHide = Keyboard.addListener('keyboardDidHide', _onKeyboardDidHide);

    return () => {
      didShow.remove();
      didHide.remove();
    };
  }, []);

  const _onKeyboardDidShow = () => {
    setKeyboardDidShow(true);
  };

  const _onKeyboardDidHide = () => {
    setKeyboardDidShow(false);
  };

  return keyboardDidShow;
};

export default useKeyboardDidShow;
