"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("ui/content-view");
var HubupCalendar = (function (_super) {
    __extends(HubupCalendar, _super);
    function HubupCalendar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HubupCalendar.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HubupCalendar.prototype, "_nativeView", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return HubupCalendar;
}(content_view_1.ContentView));
exports.HubupCalendar = HubupCalendar;
//# sourceMappingURL=hubup-calendar.ios.js.map