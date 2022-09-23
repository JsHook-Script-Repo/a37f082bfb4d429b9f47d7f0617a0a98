var packageName = common.getlpparam().packageName;


if(packageName == "com.campmobile.snowcamera"){
    common.hookAllMethods("com.yiruike.android.billing.entity.UserStatusEntity", "getExpiryDate", function(param){
        param.setResult("9999年12月31");
    });
    common.hookAllMethods('com.yiruike.android.billing.entity.UserStatusEntity','getVipStatus',function(param){
        param.setResult(java.lang.Integer.valueOf(1));
    });
}