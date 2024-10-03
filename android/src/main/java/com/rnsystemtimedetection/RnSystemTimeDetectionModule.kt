package com.rnsystemtimedetection

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class RnSystemTimeDetectionModule(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  @ReactMethod
  fun checkTime(promise: Promise) {
      val check = Check(reactContext)
      check.checkTime(promise)
  }

  @ReactMethod
  fun checkZone(promise: Promise) {
      val check = Check(reactContext)
      check.checkZone(promise)
  }

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "RnSystemTimeDetection"
  }
}
