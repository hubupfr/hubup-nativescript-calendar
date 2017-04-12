"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("ui/content-view");
var HubupCalendar = (function (_super) {
    __extends(HubupCalendar, _super);
    function HubupCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HubupCalendar.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubupCalendar.prototype, "_nativeView", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    HubupCalendar.prototype._createUI = function () {
        this._android = new android.widget.CalendarView(this._context);
        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
    };
    return HubupCalendar;
}(content_view_1.ContentView));
exports.HubupCalendar = HubupCalendar;
//# sourceMappingURL=hubup-calendar.android.js.map