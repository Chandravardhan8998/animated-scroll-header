/* eslint-disable prettier/prettier */
import React, { useMemo, useRef } from 'react';
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
    SafeAreaView,
    StatusBar,
    ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');
type Props = {
    image: ImageSourcePropType;
    /**
     * @type imageStyle
     * @description styling object for header image 
     **/
    imageStyle?: ImageStyle;
    /**
     * @type imageStyle
     * @description styling object for header image 
     **/
    containerStyle?: ViewStyle;
    children: JSX.Element | JSX.Element[];
    /**
     * @type renderImageItem
     * @description render animated image description which will have default slide down/up animation 
     **/
    renderImageItem?: () => JSX.Element | JSX.Element[];
    /**
     * @type renderHeader
     * @description render header item for scrollview 
     **/
    renderHeader?: () => JSX.Element | JSX.Element[] | null;
};
const inputValue = [1, 1.5, 2];

const HeaderImageScroll = React.forwardRef<ScrollView, Props & ScrollViewProps>(({
    children,
    image,
    containerStyle,
    imageStyle = {
        height: width,
        width,
        resizeMode: 'cover',
    },
    renderImageItem = () => <></>,
    renderHeader = () => null,
    ...props
}, ref) => {
    const animatedValue = new Animated.Value(1);
    const headerRef = useRef<View>()
    console.log(animatedValue);

    const imageScale = animatedValue.interpolate({
        inputRange: [-1, 1, 2],
        outputRange: [2, 1, 2],
        extrapolate: 'clamp',
    });
    const borderRadiusValue = animatedValue.interpolate({
        inputRange: inputValue,
        outputRange: [30, 15, 0],
        extrapolate: "clamp"
    });
    const gravityDown = animatedValue.interpolate({
        inputRange: [1, 1.1],
        outputRange: [5, 100],
        extrapolate: "clamp"
    });
    const _onScrollHandler = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollYPositionByWidth = e.nativeEvent.contentOffset.y / width + 1
        if (scrollYPositionByWidth < 3) {
            if (scrollYPositionByWidth > 2) {
            }
            animatedValue.setValue(scrollYPositionByWidth);
        }
    };
    const animatedHeaderStyleMemo = useMemo(() => animatedHeaderStyle(borderRadiusValue, containerStyle), [borderRadiusValue, containerStyle])
    const allowStickyHeader = useMemo(() => renderHeader() ? [1] : undefined, [renderHeader])
    const gravityDownHeaderStyleMemo = useMemo(() => gravityDownHeaderStyle(gravityDown), [gravityDown])
    const mainHeaderImageStyleMemo = useMemo(() => mainHeaderImageStyle(imageStyle, imageScale), [imageStyle, imageScale])
    return (
        <SafeAreaView
            style={styles.safeAreaView}
        >
            {!!image && <Animated.View style={styles.imageContainerView}>
                <Animated.Image
                    source={image}
                    style={mainHeaderImageStyleMemo}
                />
                <Animated.View
                    style={gravityDownHeaderStyleMemo}
                >
                    {renderImageItem()}
                </Animated.View>
            </Animated.View>
            }
            <Animated.ScrollView
                bounces={false}
                ref={ref}
                snapToInterval={width}
                onScroll={_onScrollHandler}
                stickyHeaderIndices={allowStickyHeader}
                {...props}
            >
                {!!image && <View style={styles.scrollViewTopBox} />}
                {renderHeader() && <Animated.View
                    ref={headerRef}
                    style={animatedHeaderStyleMemo}
                >
                    {renderHeader()}
                </Animated.View>}
                <View style={containerStyle}>{children}</View>
            </Animated.ScrollView>
        </SafeAreaView>
    );
});

export default HeaderImageScroll;

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
        minHeight: 50,
        width,
        backgroundColor: '#fff',
        justifyContent: "center", alignItems: "center",
        overflow: 'hidden',
    },
    /**
     * FIXME 70 is Hardcore height for ScrollView Header 
     * looking for some help so this can be make dynamic for all iOS devices
     **/
    scrollViewTopBox: {
        height: width - (StatusBar.currentHeight || 70),
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
    safeAreaView: {
        flex: 1,
    }
});
function mainHeaderImageStyle(imageStyle: ImageStyle, imageScale: Animated.AnimatedInterpolation) {
    return StyleSheet.flatten([
        imageStyle,
        {
            transform: [
                {
                    scale: imageScale,
                },
            ],
        },
    ]);
}

function gravityDownHeaderStyle(gravityDown: Animated.AnimatedInterpolation) {
    return StyleSheet.flatten([
        styles.renderHeaderContainer,
        {
            transform: [
                {
                    translateY: gravityDown,
                },
            ],
        },
    ]);
}

function animatedHeaderStyle(borderRadiusValue: Animated.AnimatedInterpolation, containerStyle: ViewStyle | undefined) {
    return StyleSheet.flatten([
        styles.animatedViewRadius,
        {
            borderTopLeftRadius: borderRadiusValue,
            borderTopRightRadius: borderRadiusValue,
            backgroundColor: containerStyle?.backgroundColor || '#fff',
        }
    ]);
}

