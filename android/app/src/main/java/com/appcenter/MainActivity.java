package com.appcenter;

import com.facebook.react.ReactActivity;

import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "appCenter";
  }

      @Override
      protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(savedInstanceState);
          getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                  WindowManager.LayoutParams.FLAG_SECURE);

          View v = findViewById(android.R.id.content);
          v.setFilterTouchesWhenObscured(true);
      }

}
