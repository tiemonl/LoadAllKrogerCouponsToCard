var maxCouponsAllowed = 150;
var unloadCouponFromCardClassName = "kds-Button kds-Button--destructiveSecondary kds-Button--compact CouponButton";
for (var i = 0; i < maxCouponsAllowed; i++) {
	document.getElementsByClassName(unloadCouponFromCardClassName)[i].click();
	setTimeout(function(){}, 250); //Time out to not overload website.
}
