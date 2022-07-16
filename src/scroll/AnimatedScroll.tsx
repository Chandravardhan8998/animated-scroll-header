/* eslint-disable prettier/prettier */
import React, { useRef } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    View,
    ImageSourcePropType,
    ImageStyle,
    NativeScrollEvent,
    NativeSyntheticEvent,
    ViewStyle,
    ScrollViewProps,
} from 'react-native';

const { width } = Dimensions.get('screen');
type Props = {
    image: ImageSourcePropType;
    imageStyle?: ImageStyle;
    containerStyle?: ViewStyle;
    children: JSX.Element | JSX.Element[];
    renderHeaderContent?: () => JSX.Element | JSX.Element[];
};
const inputValue = [1, 1.5, 2];
const ModalInfo = ({
    children,
    image,
    containerStyle,
    imageStyle = {
        height: width,
        width,
        resizeMode: 'cover',
    },
    renderHeaderContent = () => <></>,
    ...props
}: Props & ScrollViewProps) => {
    const animatedValue = new Animated.Value(1);
    // const animatedValue = useRef(new Animated.Value(1)).current
    console.log(animatedValue);

    const imageScale = animatedValue.interpolate({
        inputRange: [-1, 1, 2],
        outputRange: [2, 1, 2],
        extrapolate: 'clamp',
    });
    const borderRadiusValue = animatedValue.interpolate({
        inputRange: inputValue,
        outputRange: [30, 15, 0],
    });
    // const translateLeft = animatedValue.interpolate({
    //     inputRange: [1, 1.1],
    //     outputRange: [1, -40],
    // });
    // const translateRight = animatedValue.interpolate({
    //     inputRange: [1, 1.1],
    //     outputRange: [1, 40],
    // });
    const gravityDown = animatedValue.interpolate({
        inputRange: [1, 1.1],
        outputRange: [1, 100],
    });
    let scrollViewRef = useRef();
    const _onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (e.nativeEvent.contentOffset.y / width + 1 < 3) {
            animatedValue.setValue(e.nativeEvent.contentOffset.y / width + 1);
        }
    };
    return (
        <>
            <Animated.View style={styles.imageContainerView}>
                <Animated.Image
                    source={image}
                    style={[
                        imageStyle,
                        {
                            transform: [
                                {
                                    scale: imageScale,
                                },
                            ],
                        },
                    ]}
                />
                <Animated.View
                    style={[
                        styles.renderHeaderContainer,
                        {
                            transform: [
                                {
                                    translateY: gravityDown,
                                },
                            ],
                        },
                    ]}
                >
                    {renderHeaderContent()}
                </Animated.View>
            </Animated.View>
            <Animated.ScrollView
                bounces={false}
                ref={scrollViewRef}
                snapToInterval={width}
                onScroll={_onScrollHandler}
                {...props}
            >
                <View style={[styles.scrollViewTopBox]} />
                <Animated.View
                    style={[
                        styles.animatedViewRadius,
                        {
                            borderTopLeftRadius: borderRadiusValue,
                            borderTopRightRadius: borderRadiusValue,
                        },
                        {
                            backgroundColor: containerStyle?.backgroundColor || '#fff',
                        },
                    ]}
                />
                <View style={containerStyle}>{children}</View>
            </Animated.ScrollView>
        </>
    );
};

export default ModalInfo;

const styles = StyleSheet.create({
    imageContainerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    animatedViewRadius: {
        height: 50,
        width,
        backgroundColor: '#fff',
    },
    scrollViewTopBox: {
        height: width - 20,
        width,
        backgroundColor: 'transparent',
    },
    renderHeaderContainer: {
        width,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
