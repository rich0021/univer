import {
    Disposable,
    DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY,
    DOCS_NORMAL_EDITOR_UNIT_ID_KEY,
    LifecycleStages,
    OnLifecycle,
} from '@univerjs/core';
import type { Documents, IPageRenderConfig } from '@univerjs/engine-render';
import { IRenderManagerService, Rect } from '@univerjs/engine-render';

const PAGE_STROKE_COLOR = 'rgba(198,198,198, 1)';

const PAGE_FILL_COLOR = 'rgba(255,255,255, 1)';

@OnLifecycle(LifecycleStages.Rendered, PageRenderController)
export class PageRenderController extends Disposable {
    constructor(@IRenderManagerService private readonly _renderManagerService: IRenderManagerService) {
        super();

        this._initialize();

        this._commandExecutedListener();
    }

    private _initialize() {
        this._initialRenderRefresh();
    }

    private _initialRenderRefresh() {
        this._renderManagerService.currentRender$.subscribe((unitId) => {
            if (unitId == null) {
                return;
            }

            const currentRender = this._renderManagerService.getRenderById(unitId);

            if (currentRender == null) {
                return;
            }

            const { mainComponent } = currentRender;

            const docsComponent = mainComponent as Documents;

            const pageSize = docsComponent.getSkeleton()?.getPageSize();

            docsComponent.onPageRenderObservable.add((config: IPageRenderConfig) => {
                if ([DOCS_NORMAL_EDITOR_UNIT_ID_KEY, DOCS_FORMULA_BAR_EDITOR_UNIT_ID_KEY].includes(unitId)) {
                    return;
                }
                // Draw page borders
                const { page, pageLeft, pageTop, ctx } = config;
                const { width, height } = page;
                ctx.save();
                // eslint-disable-next-line no-magic-numbers
                ctx.translate(pageLeft - 0.5, pageTop - 0.5);
                Rect.drawWith(ctx, {
                    width: pageSize?.width || width,
                    height: pageSize?.height || height,
                    strokeWidth: 1,
                    stroke: PAGE_STROKE_COLOR,
                    fill: PAGE_FILL_COLOR,
                    zIndex: 3,
                });
                ctx.restore();
            });
        });
    }

    private _commandExecutedListener() {}
}