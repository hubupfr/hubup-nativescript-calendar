import { ContentView } from 'ui/content-view';

declare var android:any;

export class HubupCalendar extends ContentView {

    private _android: android.widget.CalendarView;
    private _androidViewId: number;

    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    public _createUI() {
        this._android = new android.widget.CalendarView(this._context);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);
    }

}
