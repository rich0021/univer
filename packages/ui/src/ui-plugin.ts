/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DependentOn, IConfigService, IContextService, ILocalStorageService, Inject, Injector, mergeOverrideWithDependencies, Plugin } from '@univerjs/core';
import type { Dependency } from '@univerjs/core';
import { UniverRenderEnginePlugin } from '@univerjs/engine-render';

import { CanvasPopupService, ICanvasPopupService } from './services/popup/canvas-popup.service';
import { DesktopGlobalZoneService } from './services/global-zone/desktop-global-zone.service';
import { IGlobalZoneService } from './services/global-zone/global-zone.service';
import { ComponentManager } from './common/component-manager';
import { ZIndexManager } from './common/z-index-manager';
import { ErrorController } from './controllers/error/error.controller';
import { SharedController } from './controllers/shared-shortcut.controller';
import { ShortcutPanelController } from './controllers/shortcut-display/shortcut-panel.controller';
import { IUIController } from './controllers/ui/ui.controller';
import { DesktopUIController } from './controllers/ui/ui-desktop.controller';
import { DesktopBeforeCloseService, IBeforeCloseService } from './services/before-close/before-close.service';
import { BrowserClipboardService, IClipboardInterfaceService } from './services/clipboard/clipboard-interface.service';
import { IConfirmService } from './services/confirm/confirm.service';
import { DesktopConfirmService } from './services/confirm/desktop-confirm.service';
import { ContextMenuService, IContextMenuService } from './services/contextmenu/contextmenu.service';
import { DesktopDialogService } from './services/dialog/desktop-dialog.service';
import { IDialogService } from './services/dialog/dialog.service';
import { DesktopLayoutService, ILayoutService } from './services/layout/layout.service';
import { DesktopLocalStorageService } from './services/local-storage/local-storage.service';
import { IMenuService, MenuService } from './services/menu/menu.service';
import { DesktopMessageService } from './services/message/desktop-message.service';
import { IMessageService } from './services/message/message.service';
import { DesktopNotificationService } from './services/notification/desktop-notification.service';
import { INotificationService } from './services/notification/notification.service';
import { IPlatformService, PlatformService } from './services/platform/platform.service';
import { IShortcutService, ShortcutService } from './services/shortcut/shortcut.service';
import { ShortcutPanelService } from './services/shortcut/shortcut-panel.service';
import { DesktopSidebarService } from './services/sidebar/desktop-sidebar.service';
import { ISidebarService } from './services/sidebar/sidebar.service';
import { DesktopZenZoneService } from './services/zen-zone/desktop-zen-zone.service';
import { IZenZoneService } from './services/zen-zone/zen-zone.service';
import { EditorService, IEditorService } from './services/editor/editor.service';
import { IRangeSelectorService, RangeSelectorService } from './services/range-selector/range-selector.service';
import { IProgressService, ProgressService } from './services/progress/progress.service';
import { IUIPartsService, UIPartsService } from './services/parts/parts.service';
import { CanvasFloatDomService } from './services/dom/canvas-dom-layer.service';
import { IMenuManagerService, MenuManagerService } from './services/menu/menu-manager.service';
import type { IUniverUIConfig } from './controllers/config.schema';
import { defaultPluginConfig, PLUGIN_CONFIG_KEY } from './controllers/config.schema';
import { ILocalFileService } from './services/local-file/file-opener.service';
import { DesktopLocalFileService } from './services/local-file/desktop-file-opener.service';

export const UNIVER_UI_PLUGIN_NAME = 'UNIVER_UI_PLUGIN';

export const DISABLE_AUTO_FOCUS_KEY = 'DISABLE_AUTO_FOCUS';

/**
 * UI plugin provides basic interaction with users. Including workbench (menus, UI parts, notifications etc.), copy paste, shortcut.
 */
@DependentOn(UniverRenderEnginePlugin)
export class UniverUIPlugin extends Plugin {
    static override pluginName = UNIVER_UI_PLUGIN_NAME;

    constructor(
        private readonly _config: Partial<IUniverUIConfig> = defaultPluginConfig,
        @IContextService private readonly _contextService: IContextService,
        @Inject(Injector) protected readonly _injector: Injector,
        @IConfigService private readonly _configService: IConfigService
    ) {
        super();

        // Manage the plugin configuration.
        const { menu, ...rest } = this._config;
        if (rest.disableAutoFocus) {
            this._contextService.setContextValue(DISABLE_AUTO_FOCUS_KEY, true);
        }
        if (menu) {
            this._configService.setConfig('menu', menu, { merge: true });
        }
        this._configService.setConfig(PLUGIN_CONFIG_KEY, rest);
    }

    override onStarting(): void {
        const dependencies: Dependency[] = mergeOverrideWithDependencies([
            [ComponentManager],
            [ZIndexManager],

            [ShortcutPanelService],
            [IUIPartsService, { useClass: UIPartsService }],
            [ILayoutService, { useClass: DesktopLayoutService }],
            [IShortcutService, { useClass: ShortcutService }],
            [IPlatformService, { useClass: PlatformService }],
            [IMenuService, { useClass: MenuService }],
            [IMenuManagerService, { useClass: MenuManagerService }],
            [IContextMenuService, { useClass: ContextMenuService }],
            [IClipboardInterfaceService, { useClass: BrowserClipboardService, lazy: true }],
            [INotificationService, { useClass: DesktopNotificationService, lazy: true }],
            [IDialogService, { useClass: DesktopDialogService, lazy: true }],
            [IConfirmService, { useClass: DesktopConfirmService, lazy: true }],
            [ISidebarService, { useClass: DesktopSidebarService, lazy: true }],
            [IZenZoneService, { useClass: DesktopZenZoneService, lazy: true }],
            [IGlobalZoneService, { useClass: DesktopGlobalZoneService, lazy: true }],
            [IMessageService, { useClass: DesktopMessageService, lazy: true }],
            [ILocalStorageService, { useClass: DesktopLocalStorageService, lazy: true }],
            [IBeforeCloseService, { useClass: DesktopBeforeCloseService }],
            [ILocalFileService, { useClass: DesktopLocalFileService }],
            [IEditorService, { useClass: EditorService }],
            [IRangeSelectorService, { useClass: RangeSelectorService }],
            [ICanvasPopupService, { useClass: CanvasPopupService }],
            [IProgressService, { useClass: ProgressService }],
            [CanvasFloatDomService],
            [IUIController, {
                useFactory: (injector: Injector) => injector.createInstance(DesktopUIController, this._config),
                deps: [Injector],
            },
            ],
            [SharedController],
            [ErrorController],
            [ShortcutPanelController],
        ], this._config.override);
        dependencies.forEach((dependency) => this._injector.add(dependency));
    }
}
