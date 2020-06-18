//
//  AppSplash.h
//  appCenter
//
//  Created by Viktor Kurochka on 6/18/20.
//

#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface AppSplash : NSObject<RCTBridgeModule>
+ (void)showSplash:(NSString*)splashScreen inRootView:(UIView*)rootView;
+ (void)show;
+ (void)hide;
@end
