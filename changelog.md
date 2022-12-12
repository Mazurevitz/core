## Glue42 Core v2.2.0 (2022-12-12)

#### :rocket: New Feature
* `web-platform`, `web`
  * [#572](https://github.com/Glue42/core/pull/572) Add windows focus support ([@flashd2n](https://github.com/flashd2n))
  * [#500](https://github.com/Glue42/core/pull/500) Prepare Web Platform For Core+ ([@flashd2n](https://github.com/flashd2n))
  * [#249](https://github.com/Glue42/core/pull/249) Added a GetPermission method to the Notifications API ([@flashd2n](https://github.com/flashd2n))
* `intents-resolver-api`, `web`
  * [#526](https://github.com/Glue42/core/pull/526) Create intents resolver api ([@ksgeorgieva](https://github.com/ksgeorgieva))
* `web-platform`, `web`
  * [#469](https://github.com/Glue42/core/pull/469) Rework fdc3 dep tree ([@ksgeorgieva](https://github.com/ksgeorgieva))
* `web-platform`
  * [#527](https://github.com/Glue42/core/pull/527) Extend Web Platform with Core+ support ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `web-platform`, `workspaces-api`, `workspaces-ui-core`
  * [#487](https://github.com/Glue42/core/pull/487) Add set maximization boundary ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `golden-layout`, `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#473](https://github.com/Glue42/core/pull/473) Add allow reorder option ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `core`, `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#406](https://github.com/Glue42/core/pull/406) Added interception capabilities to the plugins ([@flashd2n](https://github.com/flashd2n))
  * [#304](https://github.com/Glue42/core/pull/304) Implement multiple connection transports ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `workspaces-api`, `workspaces-ui-core`
  * [#423](https://github.com/Glue42/core/pull/423) Add a maximize boundary in workspaces ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `workspaces-api`
  * [#421](https://github.com/Glue42/core/pull/421) Add support for registering keyboard shortcuts per frame ([@gdavidkov](https://github.com/gdavidkov))
  * [#257](https://github.com/Glue42/core/pull/257) Implemented waitForFrame ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `golden-layout`, `workspaces-ui-core`
  * [#420](https://github.com/Glue42/core/pull/420) Enabled addWindow and addContainer and added tests ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `core`, `web-platform`
  * [#417](https://github.com/Glue42/core/pull/417) The Auth object now accepts a provider context in addition to provider. ([@flashd2n](https://github.com/flashd2n))
* `workspaces-api`, `workspaces-ui-core`
  * [#271](https://github.com/Glue42/core/pull/271) Implemented the option ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `core`, `dev-workspaces-frame`, `fdc3`, `web-platform`, `web`, `workspaces-ui-core`
  * [#278](https://github.com/Glue42/core/pull/278) Added support for Glue42 Developer Extension ([@flashd2n](https://github.com/flashd2n))
* `workspaces-api`, `workspaces-ui-react`
  * [#254](https://github.com/Glue42/core/pull/254) Add a move area component ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :boom: Breaking Change
* `fdc3`
  * [#469](https://github.com/Glue42/core/pull/469) Rework fdc3 dep tree ([@ksgeorgieva](https://github.com/ksgeorgieva))

#### :bug: Bug Fix
* `workspaces-api`
  * [#587](https://github.com/Glue42/core/pull/587) Revert Workspaces Layouts Import to Protocol ([@flashd2n](https://github.com/flashd2n))
  * [#428](https://github.com/Glue42/core/pull/428) Fix when all callbacks are invoked with the same shortcuts no matter where they are registered ([@gdavidkov](https://github.com/gdavidkov))
* `web-platform`
  * [#565](https://github.com/Glue42/core/pull/565) Fix Web initiation fail when more than 50 clients are connected ([@flashd2n](https://github.com/flashd2n))
  * [#519](https://github.com/Glue42/core/pull/519) Platform app placed in a Workspace will now also default to being a simple client ([@flashd2n](https://github.com/flashd2n))
* `core`, `fdc3`, `intents-resolver-api`, `web-platform`, `web-worker`, `web`, `workspaces-api`, `workspaces-ui-core`, `workspaces-ui-react`
  * [#560](https://github.com/Glue42/core/pull/560) Minor dev environment fixes ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `web`
  * [#544](https://github.com/Glue42/core/pull/544) Minor intents API fixes ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `web`, `workspaces-api`
  * [#515](https://github.com/Glue42/core/pull/515) Enabled bulk imports of up to 999 layouts ([@flashd2n](https://github.com/flashd2n))
* `workspaces-ui-react`
  * [#507](https://github.com/Glue42/core/pull/507) Added the missing export for WorkspaceTabV2 ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `dev-workspaces-frame`, `workspaces-api`, `workspaces-ui-react`
  * [#508](https://github.com/Glue42/core/pull/508) Started searching for the glue object in the react context ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `golden-layout`, `web-platform`, `workspaces-api`, `workspaces-ui-core`
  * [#487](https://github.com/Glue42/core/pull/487) Add set maximization boundary ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `core`
  * [#485](https://github.com/Glue42/core/pull/485) Clients embedded in iframes now always have unique ids ([@flashd2n](https://github.com/flashd2n))
  * [#474](https://github.com/Glue42/core/pull/474) Improved the message flushing when re-announcing the contexts ([@flashd2n](https://github.com/flashd2n))
* `fdc3`
  * [#482](https://github.com/Glue42/core/pull/482) Fix bug with data wrapping when broadcasting a context ([@ksgeorgieva](https://github.com/ksgeorgieva))
  * [#383](https://github.com/Glue42/core/pull/383) Multiple context listeners before joining a channel inside of @glue42/fdc3 ([@ksgeorgieva](https://github.com/ksgeorgieva))
* `workspaces-ui-core`
  * [#447](https://github.com/Glue42/core/pull/447) Bugfix/flat workspaces window proportions are not saved ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#381](https://github.com/Glue42/core/pull/381) Fix a breaking change introduced by the multiple transports PR ([@flashd2n](https://github.com/flashd2n))

#### :nail_care: Enhancement
* `web-platform`, `web`
  * [#277](https://github.com/Glue42/core/pull/277) Improve the time complexity of mass app definitions import ([@flashd2n](https://github.com/flashd2n))
  * [#273](https://github.com/Glue42/core/pull/273) Glue42 Core can now handle bulk imports for application definitions up to 10 000 in total ([@flashd2n](https://github.com/flashd2n))
* `intents-resolver-api`, `web`
  * [#546](https://github.com/Glue42/core/pull/546) Replace subscription for onInstanceStarted with serverMethodAdded ([@ksgeorgieva](https://github.com/ksgeorgieva))
* Other
  * [#548](https://github.com/Glue42/core/pull/548) Updates all Glue42 libs in the JS tutorial to the latest verions ([@flashd2n](https://github.com/flashd2n))
  * [#441](https://github.com/Glue42/core/pull/441) Stabilize AppManager tests after softening the web incoming protocol decoder. ([@flashd2n](https://github.com/flashd2n))
* `web-platform`
  * [#528](https://github.com/Glue42/core/pull/528) Fixes various types issues in web platform ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `workspaces-ui-core`
  * [#512](https://github.com/Glue42/core/pull/512) Extend the control protocol with commands detection ([@flashd2n](https://github.com/flashd2n))
  * [#496](https://github.com/Glue42/core/pull/496) The platform now adds a g42 prefix to all windows opened by it ([@flashd2n](https://github.com/flashd2n))
* `workspaces-api`
  * [#506](https://github.com/Glue42/core/pull/506) Optimize get my workspace ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `workspaces-api`
  * [#501](https://github.com/Glue42/core/pull/501) Improve plugins platform controls ([@flashd2n](https://github.com/flashd2n))
* `core`, `web-platform`, `workspaces-ui-core`
  * [#465](https://github.com/Glue42/core/pull/465) Phase out the manual resolve event ([@flashd2n](https://github.com/flashd2n))
* `web`, `workspaces-ui-core`
  * [#440](https://github.com/Glue42/core/pull/440) Glue42 Web no longer uses the cloned response of the platform internal control ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`
  * [#429](https://github.com/Glue42/core/pull/429) Optimize the disposal process of golden-layout ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web-worker`
  * [#320](https://github.com/Glue42/core/pull/320) Extend @glue42/web-worker to focus the platform on notification click ([@flashd2n](https://github.com/flashd2n))
* `core`
  * [#266](https://github.com/Glue42/core/pull/266) Improve core electron detection ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `workspaces-ui-core`
  * [#260](https://github.com/Glue42/core/pull/260) Empty placeholder improvements ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `react-hooks`, `workspaces-ui-react`
  * [#256](https://github.com/Glue42/core/pull/256) Updated the react dependencies ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :memo: Documentation
* Other
  * [#548](https://github.com/Glue42/core/pull/548) Updates all Glue42 libs in the JS tutorial to the latest verions ([@flashd2n](https://github.com/flashd2n))
  * [#545](https://github.com/Glue42/core/pull/545) Updated Glue42 Core+ docs. ([@arjunah](https://github.com/arjunah))
  * [#504](https://github.com/Glue42/core/pull/504) Added Glue42 Core+ Plugin docs. ([@arjunah](https://github.com/arjunah))
  * [#484](https://github.com/Glue42/core/pull/484) Extend JS tutorial with Notifications, Plugins and Intents chapters ([@AleksTanev](https://github.com/AleksTanev))
  * [#509](https://github.com/Glue42/core/pull/509) Update the Glue42 packages in the tutorials ([@flashd2n](https://github.com/flashd2n))
  * [#432](https://github.com/Glue42/core/pull/432) Added info about Glue42 Core+. ([@arjunah](https://github.com/arjunah))
  * [#384](https://github.com/Glue42/core/pull/384) fixed links, minor doc edits ([@arjunah](https://github.com/arjunah))
  * [#333](https://github.com/Glue42/core/pull/333) Fix react tutorial incompatibility with latest CRA ([@ksgeorgieva](https://github.com/ksgeorgieva))
  * [#379](https://github.com/Glue42/core/pull/379) Edited Connecting to Glue42 Enterprise. ([@arjunah](https://github.com/arjunah))
  * [#369](https://github.com/Glue42/core/pull/369) Updated diagrams. ([@arjunah](https://github.com/arjunah))
  * [#355](https://github.com/Glue42/core/pull/355) Minor doc edits. ([@arjunah](https://github.com/arjunah))
  * [#291](https://github.com/Glue42/core/pull/291) Updated diagrams with new design ([@arjunah](https://github.com/arjunah))
  * [#259](https://github.com/Glue42/core/pull/259) Added a Manipulating Workspace Elements section ([@arjunah](https://github.com/arjunah))
  * [#258](https://github.com/Glue42/core/pull/258) Fixed title links. ([@arjunah](https://github.com/arjunah))
  * [#253](https://github.com/Glue42/core/pull/253) Updated the vanilla JS tutorial with latest packages ([@flashd2n](https://github.com/flashd2n))
* `web`
  * [#472](https://github.com/Glue42/core/pull/472) Core docs style edits and updates. ([@arjunah](https://github.com/arjunah))
* `workspaces-ui-core`
  * [#342](https://github.com/Glue42/core/pull/342) Updated Workspaces docs. ([@arjunah](https://github.com/arjunah))

#### :house: Internal
* `dev-workspaces-frame`, `fdc3`, `ng`, `react-hooks`, `web-platform`, `web`, `workspaces-ui-core`
  * [#437](https://github.com/Glue42/core/pull/437) Update all packages with @glue42/desktop@5.14.0 ([@flashd2n](https://github.com/flashd2n))
  * [#422](https://github.com/Glue42/core/pull/422) Updated all packages to @glue42/desktop@5.12.0 ([@flashd2n](https://github.com/flashd2n))
  * [#267](https://github.com/Glue42/core/pull/267) Update all packages to @glue42/desktop 5.7.6 ([@flashd2n](https://github.com/flashd2n))
* `core`, `golden-layout`, `ng`, `react-hooks`, `web-platform`, `web-worker`, `web`, `workspaces-ui-core`, `workspaces-ui-react`
  * [#378](https://github.com/Glue42/core/pull/378) Resolve Dependency Vulnerabilities ([@flashd2n](https://github.com/flashd2n))

#### Committers: 12
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Svetozar Mateev ([@SvetozarMateev](https://github.com/SvetozarMateev))
- Kalina Georgieva ([@ksgeorgieva](https://github.com/ksgeorgieva))
- Hristo Ivanov ([@arjunah](https://github.com/arjunah))
- Aleksandar Tanev ([@AleksTanev](https://github.com/AleksTanev))
- Georgi Davidkov ([@gdavidkov](https://github.com/gdavidkov))
- Martin Donevski ([@indeavr](https://github.com/indeavr))
- Luchiya Raycheva ([@lraycheva](https://github.com/lraycheva))
- Stoyan Uzunov ([@sguzunov](https://github.com/sguzunov))
- Plamen Petkov ([@ppetkow](https://github.com/ppetkow))
- Velko Nikolov ([@staafl](https://github.com/staafl))
- Theodor Naidenov ([@tnaidenov](https://github.com/tnaidenov))


## Glue42 Core v2.1.0 (2021-09-23)

#### :rocket: New Feature
* `web-platform`, `workspaces-api`
  * [#245](https://github.com/Glue42/core/pull/245) Implemented workspace is selected property ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `golden-layout`, `workspaces-api`, `workspaces-ui-core`
  * [#243](https://github.com/Glue42/core/pull/243) Implemented container maximization in workspaces ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web-worker`, `web`
  * [#219](https://github.com/Glue42/core/pull/219) Implemented Advanced Notifications ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#212](https://github.com/Glue42/core/pull/212) Implemented workspace constraints ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :bug: Bug Fix
* `workspaces-api`, `workspaces-ui-core`
  * [#237](https://github.com/Glue42/core/pull/237) Improved workspace events when the frame is a platform ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `fdc3`
  * [#226](https://github.com/Glue42/core/pull/226) Fixed an issue with the validation of `raiseIntent()` ([@ggeorgievx](https://github.com/ggeorgievx))
* `golden-layout`, `web-platform`, `workspaces-api`, `workspaces-ui-core`
  * [#216](https://github.com/Glue42/core/pull/216) Bugfix/invalid boxes size in workspaces ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :nail_care: Enhancement
* `web-platform`, `workspaces-api`
  * [#247](https://github.com/Glue42/core/pull/247) Added all typings coming with Enterprise 3.12 ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `web-worker`, `web`
  * [#242](https://github.com/Glue42/core/pull/242) Added an option to focus the platform on default click of the notification ([@flashd2n](https://github.com/flashd2n))

#### :memo: Documentation
* `core`, `web`
  * [#230](https://github.com/Glue42/core/pull/230) Fixed @ symbols and links in package descriptions ([@arjunah](https://github.com/arjunah))
* `react-hooks`
  * [#229](https://github.com/Glue42/core/pull/229) SE optimization ([@arjunah](https://github.com/arjunah))
* Other
  * [#225](https://github.com/Glue42/core/pull/225) Minor doc fixes ([@arjunah](https://github.com/arjunah))
  * [#215](https://github.com/Glue42/core/pull/215) Updated creation of channel selector widget ([@swseverance](https://github.com/swseverance))
* `core`, `web`, `workspaces-api`
  * [#223](https://github.com/Glue42/core/pull/223) Fixed API descriptions and links. ([@arjunah](https://github.com/arjunah))
* `fdc3`, `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#199](https://github.com/Glue42/core/pull/199) Restructured and edited docs. ([@arjunah](https://github.com/arjunah))

#### :house: Internal
* `core`, `dev-workspaces-frame`, `fdc3`, `golden-layout`, `ng`, `react-hooks`, `web-platform`, `web`, `workspaces-ui-core`
  * [#224](https://github.com/Glue42/core/pull/224) Updated desktop and deps vulnerabilities ([@flashd2n](https://github.com/flashd2n))

#### Committers: 6
- Georgi Georgiev ([@ggeorgievx](https://github.com/ggeorgievx))
- Hristo Ivanov ([@arjunah](https://github.com/arjunah))
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Solar ([@Indeavr](https://github.com/Indeavr))
- Svetozar Mateev ([@SvetozarMateev](https://github.com/SvetozarMateev))
- [@swseverance](https://github.com/swseverance)

## Glue42 Core v2.0.0 (2021-05-11)

#### :rocket: New Feature
* `fdc3`
  * [#202](https://github.com/Glue42/core/pull/202) Update @glue42/fdc3 to the FDC3 v1.2 spec ([@Indeavr](https://github.com/Indeavr))
  * [#171](https://github.com/Glue42/core/pull/171) Adapt @glue42/fdc3 (and fdc3-demos) for Glue42 Core v2 ([@ggeorgievx](https://github.com/ggeorgievx))
* `web-platform`, `workspaces-api`, `workspaces-ui-core`
  * [#198](https://github.com/Glue42/core/pull/198) Implement loading strategies ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`
  * [#183](https://github.com/Glue42/core/pull/183) Implement hibernate resume workspace ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web`
  * [#186](https://github.com/Glue42/core/pull/186) Implement Read-only Environment ([@flashd2n](https://github.com/flashd2n))
* `core`, `golden-layout`, `ng`, `react-hooks`, `web-platform`, `web`, `workspaces-api`, `workspaces-ui-core`, `workspaces-ui-react`
  * [#165](https://github.com/Glue42/core/pull/165) Implement V2 of Glue42 Core ([@flashd2n](https://github.com/flashd2n))
  * [#167](https://github.com/Glue42/core/pull/167) Release stable Glue42 Core V2 ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `workspaces-api`, `workspaces-ui-core`, `workspaces-ui-react`
  * [#159](https://github.com/Glue42/core/pull/159) Workspaces pinned tabs ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `golden-layout`, `workspaces-api`, `workspaces-app`, `workspaces-ui-core`, `workspaces-ui-react`
  * [#153](https://github.com/Glue42/core/pull/153) Workspaces extensions ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web-platform`, `web`, `workspaces-ui-react`
  * [#187](https://github.com/Glue42/core/pull/187) Implement Remote Stores For Applications ([@flashd2n](https://github.com/flashd2n))
* `dev-workspaces-frame`, `fdc3`, `ng`, `react-hooks`, `web-platform`, `web`, `workspaces-ui-core`
  * [#176](https://github.com/Glue42/core/pull/176) Added AppManager inMemory operations ([@flashd2n](https://github.com/flashd2n))
#### :bug: Bug Fix
* `workspaces-ui-core`
  * [#209](https://github.com/Glue42/core/pull/209) Fix default workspace context value in layout ([@SvetozarMateev](https://github.com/SvetozarMateev))
  * [#206](https://github.com/Glue42/core/pull/206) Added empty object as default value ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `workspaces-api`
  * [#200](https://github.com/Glue42/core/pull/200) Fixes the workspace windows reference refresh ([@flashd2n](https://github.com/flashd2n))
  * [#193](https://github.com/Glue42/core/pull/193) Workspaces refresh now correctly reuses nested references ([@flashd2n](https://github.com/flashd2n))
* `web`, `workspaces-ui-core`
  * [#182](https://github.com/Glue42/core/pull/182) Correctly set workspace app titles ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `web`, `workspaces-ui-core`
  * [#181](https://github.com/Glue42/core/pull/181) Fixes issue with restoring workspace windows titles ([@flashd2n](https://github.com/flashd2n))
* `web`
  * [#150](https://github.com/Glue42/core/pull/150) Fix a race where `stop()` resolves before the application is removed from the instances array ([@ggeorgievx](https://github.com/ggeorgievx))
* `fdc3`
  * [#163](https://github.com/Glue42/core/pull/163) Fix a race in the @glue42/fdc3 Glue42 Enterprise channel sync ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#155](https://github.com/Glue42/core/pull/155) Consider the glue42gd.fdc3InitsGlue flag ([@ggeorgievx](https://github.com/ggeorgievx))
* `ng`
  * [#160](https://github.com/Glue42/core/pull/160) Improve ng compatibility with angular versions less than 9 ([@flashd2n](https://github.com/flashd2n))

#### :nail_care: Enhancement
* `core`, `web-platform`, `workspaces-ui-core`
  * [#185](https://github.com/Glue42/core/pull/185) Enable platform frames ([@flashd2n](https://github.com/flashd2n))
* `core`, `web-platform`, `web`
  * [#174](https://github.com/Glue42/core/pull/174) Change flags to be a string => any mapping (instead of string => string) ([@ggeorgievx](https://github.com/ggeorgievx))
* `core`
  * [#158](https://github.com/Glue42/core/pull/158) Replace a static API InstanceWrapper property with an injected API ([@ggeorgievx](https://github.com/ggeorgievx))
* `web-platform`, `web`
  * [#172](https://github.com/Glue42/core/pull/172) Added ClientOnly mode for the platform ([@flashd2n](https://github.com/flashd2n))
* `web`
  * [#164](https://github.com/Glue42/core/pull/164) Add tests for all interop methods ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#152](https://github.com/Glue42/core/pull/152) Simplify the instance lifetime tracking ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#147](https://github.com/Glue42/core/pull/147) Add an optional requestTimeout property to the RemoteSource interface ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#169](https://github.com/Glue42/core/pull/169) Add tests for all intents methods ([@ggeorgievx](https://github.com/ggeorgievx))
* `fdc3`
  * [#145](https://github.com/Glue42/core/pull/145) Change `findIntent()` and `findIntentsByContext()` to return only the app intents and the dynamic instance intents ([@ggeorgievx](https://github.com/ggeorgievx))
* `fdc3`, `web`
  * [#151](https://github.com/Glue42/core/pull/151) Use the FDC3 typings provided by the newly published @finos/fdc3 package ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#149](https://github.com/Glue42/core/pull/149) Add tests for all appManager methods ([@ggeorgievx](https://github.com/ggeorgievx))
* `golden-layout`
  * [#146](https://github.com/Glue42/core/pull/146) Added splitter events ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :memo: Documentation
* Other
  * [#204](https://github.com/Glue42/core/pull/204) bugfix: js-tutorial ([@swseverance](https://github.com/swseverance))
  * [#173](https://github.com/Glue42/core/pull/173) Edited the JS tutorial ([@arjunah](https://github.com/arjunah))
  * [#168](https://github.com/Glue42/core/pull/168) Edited the React and Angular wrappers docs ([@arjunah](https://github.com/arjunah))
* `web-platform`, `web`
  * [#178](https://github.com/Glue42/core/pull/178) Updated Live Examples to V2 ([@flashd2n](https://github.com/flashd2n))
* `web-platform`, `web`, `workspaces-ui-core`
  * [#177](https://github.com/Glue42/core/pull/177) Added Angular tutorial V2 And Start of Day Demo Updated To V2  ([@flashd2n](https://github.com/flashd2n))
* `workspaces-api`
  * [#157](https://github.com/Glue42/core/pull/157) Fixed broken links ([@arjunah](https://github.com/arjunah))

#### :house: Internal
* `fdc3`, `web-platform`, `web`
  * [#180](https://github.com/Glue42/core/pull/180) Nest the intent metadata inside a intent property of the method flags ([@ggeorgievx](https://github.com/ggeorgievx))

#### Committers: 7
- Georgi Georgiev ([@ggeorgievx](https://github.com/ggeorgievx))
- Hristo Ivanov ([@arjunah](https://github.com/arjunah))
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Svetozar Mateev ([@SvetozarMateev](https://github.com/SvetozarMateev))
- Grigor Penev [@GrigorPenev](https://github.com/GrigorPenev)
- Martin Donevski ([@Indeavr](https://github.com/Indeavr))
- [@swseverance](https://github.com/swseverance)


## Glue42 Core v1.2.0 (2020-10-12)

#### :rocket: New Feature
* `web`
  * [#141](https://github.com/Glue42/core/pull/141) Implemented intents API ([@ggeorgievx](https://github.com/ggeorgievx))
* `workspaces-api`, `workspaces-app`
  * [#143](https://github.com/Glue42/core/pull/143) Implemented workspaces events ([@flashd2n](https://github.com/flashd2n)) ([@SvetozarMateev](https://github.com/SvetozarMateev))
  * [#140](https://github.com/Glue42/core/pull/140) Implemented workspace contexts ([@flashd2n](https://github.com/flashd2n)) ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `fdc3`
  * [#116](https://github.com/Glue42/core/pull/116) Added an implementation of the FDC3 Standard - the @glue42/fdc3 package ([@ggeorgievx](https://github.com/ggeorgievx))

#### :bug: Bug Fix
* `core`, `web`
  * [#124](https://github.com/Glue42/core/pull/124) Fixed vulnerabilities found in numerous dependencies ([@flashd2n](https://github.com/flashd2n))
* `web`
  * [#135](https://github.com/Glue42/core/pull/135) Fixed the application start resolve condition ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#137](https://github.com/Glue42/core/pull/137) Fixed a bug where the channel's data is undefined instead of an empty object ([@ggeorgievx](https://github.com/ggeorgievx))
* `fdc3`
  * [#133](https://github.com/Glue42/core/pull/133) Fixed a bug where `getOrCreateChannel()` was not returning system channels ([@ggeorgievx](https://github.com/ggeorgievx))
* `workspaces-app`
  * [#129](https://github.com/Glue42/core/pull/129) Fixed a bug where remote apps cannot open in workspaces ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`, `workspaces-api`, `workspaces-app`
  * [#122](https://github.com/Glue42/core/pull/122) Multiple fixes and improvements in workspaces and golden-layout ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :nail_care: Enhancement
* `fdc3`, `ng`, `react-hooks`, `web`
  * [#144](https://github.com/Glue42/core/pull/144) Added optional icon and caption properties to the Application interface ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#130](https://github.com/Glue42/core/pull/130) Added a way for @glue42/fdc3 to accept the application's name ([@ggeorgievx](https://github.com/ggeorgievx))
* `core`, `web`
  * [#138](https://github.com/Glue42/core/pull/138) Added input validation to the @glue42/core's Contexts API ([@ggeorgievx](https://github.com/ggeorgievx))
* `web`
  * [#132](https://github.com/Glue42/core/pull/132) Publishing to a channel now utilizes the new `setPaths` contexts functionality for correct context merging ([@ggeorgievx](https://github.com/ggeorgievx))
* `golden-layout`, `workspaces-app`
  * [#120](https://github.com/Glue42/core/pull/120) Improved the workspaces tabs behavior ([@SvetozarMateev](https://github.com/SvetozarMateev))

#### :memo: Documentation
* `web`
  * [#142](https://github.com/Glue42/core/pull/142) Added Intents docs ([@arjunah](https://github.com/arjunah))
* Other
  * [#121](https://github.com/Glue42/core/pull/121) Edited FDC3 docs and JS Tutorial Workspaces chapter ([@arjunah](https://github.com/arjunah))
  * [#123](https://github.com/Glue42/core/pull/123) Added the Start of Day demo application ([@flashd2n](https://github.com/flashd2n))

#### :hammer: Underlying Tools
* [#128](https://github.com/Glue42/core/pull/128) Extended the end-to-end testing environment with support application manipulation. ([@flashd2n](https://github.com/flashd2n))
* [#139](https://github.com/Glue42/core/pull/139) Moved interop tests from Enterprise to Core ([@GrigorPenev](https://github.com/GrigorPenev))
* [#119](https://github.com/Glue42/core/pull/119) Moved and adapted the @glue42/web Channels API tests to e2e ([@ggeorgievx](https://github.com/ggeorgievx))

#### Committers: 5
- Georgi Georgiev ([@ggeorgievx](https://github.com/ggeorgievx))
- Hristo Ivanov ([@arjunah](https://github.com/arjunah))
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Svetozar Mateev ([@SvetozarMateev](https://github.com/SvetozarMateev))
- Grigor Penev [@GrigorPenev](https://github.com/GrigorPenev)


## Glue42 Core v1.1.0 (2020-07-31)

#### :rocket: New Feature
* `web`, `workspaces-api`, `workspaces-app`
  * [#118](https://github.com/Glue42/core/pull/118) Implemented workspaces.  ([@flashd2n](https://github.com/flashd2n)) ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `cli-core`
  * [#110](https://github.com/Glue42/core/pull/110) Extend the CLI with workspaces functionalities. The CLI can now set up a dev environment with workspaces, build and serve all workspaces assets and allows the developers to define and inject css files into the workspace frame. ([@flashd2n](https://github.com/flashd2n))
  * [#57](https://github.com/Glue42/core/pull/57) Added `version` command to the CLI, which returns the currently installed version of the package ([@flashd2n](https://github.com/flashd2n))
* `golden-layout`
  * [#106](https://github.com/Glue42/core/pull/106) Added Golden layout package. This is the underlying UI controller of the Workspaces App. ([@SvetozarMateev](https://github.com/SvetozarMateev))
* `web`
  * [#95](https://github.com/Glue42/core/pull/95) Implemented the AppManager API. ([@ggeorgievx](https://github.com/ggeorgievx))
* `web`
  * [#82](https://github.com/Glue42/core/pull/82) Implemented the Channels API. ([@ggeorgievx](https://github.com/ggeorgievx))
* `ng`
  * [#67](https://github.com/Glue42/core/pull/67) Implemented @glue42/ng - a simple, lightweight Angular wrapper compatible with Glue42 Core and Glue42 Enterprise ([@flashd2n](https://github.com/flashd2n))

#### :bug: Bug Fix
* `web`
  * [#100](https://github.com/Glue42/core/pull/100) Fixed an issue which caused GlueWeb() to crash if no appManager value was provided ([@ggeorgievx](https://github.com/ggeorgievx))
* `core`
  * [#64](https://github.com/Glue42/core/pull/64) Bugfix/issue 62 ([@kirilpopov](https://github.com/kirilpopov))
* `cli-core`
  * [#54](https://github.com/Glue42/core/pull/54) Fixed a bug where the node process hangs on MacOS 🐛 ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#52](https://github.com/Glue42/core/pull/52) Fixed an issue where the CLI `build` will produce a .js config file, instead of .json ([@flashd2n](https://github.com/flashd2n))

#### :nail_care: Enhancement
* `web`
  * [#86](https://github.com/Glue42/core/pull/86) Made the Channels API compatible with Enterprise ([@ggeorgievx](https://github.com/ggeorgievx))
* `react-hooks`
  * [#47](https://github.com/Glue42/core/pull/47) Added jest typings ([@3lmo](https://github.com/3lmo))

#### :memo: Documentation
* CodeSandBox Examples
  * [#70](https://github.com/Glue42/core/pull/70) [#73](https://github.com/Glue42/core/pull/73) [#79](https://github.com/Glue42/core/pull/79) [#81](https://github.com/Glue42/core/pull/81) Implemented live examples ([@sguzunov](https://github.com/sguzunov))
  * [#85](https://github.com/Glue42/core/pull/85) [#88](https://github.com/Glue42/core/pull/88) [#89](https://github.com/Glue42/core/pull/89) Added various Channel Selector Widget UIs ([@ggeorgievx](https://github.com/ggeorgievx))
  * [#91](https://github.com/Glue42/core/pull/91) The Channels live-examples can now be controlled using the G4E channel selector widget UI ✨ ([@ggeorgievx](https://github.com/ggeorgievx))
* `web`
  * [#87](https://github.com/Glue42/core/pull/87) Added Channels API Documentation ([@ggeorgievx](https://github.com/ggeorgievx))
* `react-hooks`
  * [#114](https://github.com/Glue42/core/pull/114) Added React tutorial text and snippets fixes ([@yankostadinov](https://github.com/yankostadinov))
  * [#84](https://github.com/Glue42/core/pull/84) [#76](https://github.com/Glue42/core/pull/76) Extended ReactJS documentation and tutorial with channels ([@GrigorPenev](https://github.com/GrigorPenev))
* `cli-core`, `core`, `ng`, `react-hooks`, `web`, `worker-web`
  * [#74](https://github.com/Glue42/core/pull/74) [#96](https://github.com/Glue42/core/pull/96) [#98](https://github.com/Glue42/core/pull/98) [#105](https://github.com/Glue42/core/pull/105)   Performed full Glue42 Core documentation edit ([@arjunah](https://github.com/arjunah))
* `ng`
  * [#75](https://github.com/Glue42/core/pull/75) [#92](https://github.com/Glue42/core/pull/92) Created a tutorial for the @glue42/ng library ([@flashd2n](https://github.com/flashd2n))
* `react-hooks`, `web`, `worker-web`
  * [#46](https://github.com/Glue42/core/pull/46) [#49](https://github.com/Glue42/core/pull/49) [#53](https://github.com/Glue42/core/pull/53) [#58](https://github.com/Glue42/core/pull/58) Fixed various documentation errors and improved overall quality ([@ggeorgievx](https://github.com/ggeorgievx))

#### :hammer: Underlying Tools
* [#102](https://github.com/Glue42/core/pull/102) [#104](https://github.com/Glue42/core/pull/104)[#113](https://github.com/Glue42/core/pull/113) Created Glue42 Core E2E testing environment, complete with custom process controllers. This E2E runs on latest CLI, Web, Workspaces API, Workspaces APP, Core, Worker and Gateway packages. ([@GrigorPenev](https://github.com/GrigorPenev))

#### Committers: 10
- Georgi Georgiev ([@ggeorgievx](https://github.com/ggeorgievx))
- Hristo Ivanov ([@arjunah](https://github.com/arjunah))
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Kiril Popov ([@kirilpopov](https://github.com/kirilpopov))
- Stoyan Uzunov ([@sguzunov](https://github.com/sguzunov))
- Svetozar Mateev ([@SvetozarMateev](https://github.com/SvetozarMateev))
- Yan Kostadinov ([@yankostadinov](https://github.com/yankostadinov))
- Emil Petkov [@3lmo](https://github.com/3lmo)
- Grigor Penev [@GrigorPenev](https://github.com/GrigorPenev)

## Glue42 Core v1.0.0 (2020-04-06)

#### :rocket: New Feature
* `react-hooks`
  * [#10](https://github.com/Glue42/core/pull/10) Created the **@glue42/react-hooks** library. This package provides custom React hooks for the Glue42 JavaScript libraries ([@3lmo](https://github.com/3lmo))
* `web`
  * [#31](https://github.com/Glue42/core/pull/31) Created the **@glue42/web** package, which exposes an API for all Glue42 Clients to utilize the interop, window and contexts capabilities.  ([@kirilpopov](https://github.com/kirilpopov))
* `core`
  * [#27](https://github.com/Glue42/core/pull/27) Transferred the existing code-base for the **@glue42/core** package from the internal stash system to github. This package processes the Glue42 Client connection to the gateway and exposes interop functionality. It is the foundation of **@glue42/web**. ([@kirilpopov](https://github.com/kirilpopov))
* `cli-core`
  * [#25](https://github.com/Glue42/core/pull/25) Completed the **@glue42/cli-core** package. This development tool makes setting up and working on Glue42 Core project easy and painless. ([@flashd2n](https://github.com/flashd2n))
* `worker-web`
  * [#17](https://github.com/Glue42/core/pull/17) Created the **@glue42/worker-web** package, which exposes a central connection point, which acts as a bridge between Glue42 Clients and the gateway. ([@flashd2n](https://github.com/flashd2n))

#### :memo: Documentation
* [#28](https://github.com/Glue42/core/pull/28) Created the Vanilla JS tutorial - text guide, project start code and full solution. ([@flashd2n](https://github.com/flashd2n))
* [#16](https://github.com/Glue42/core/pull/16) Created a React tutorial for Glue42 Core, which showcases the use of the **@glue42/react-hooks** library. ([@3lmo](https://github.com/3lmo))
* [#36](https://github.com/Glue42/core/pull/36) Added guide for running a Glue42 Core application in Glue42 Enterprise ([@kirilpopov](https://github.com/kirilpopov))
* [#32](https://github.com/Glue42/core/pull/32) Created the API reference documentation for **@glue42/web** ([@flashd2n](https://github.com/flashd2n))
* [#34](https://github.com/Glue42/core/pull/34)[#37](https://github.com/Glue42/core/pull/37)[#43](https://github.com/Glue42/core/pull/43) Created the texts for the initial version of the Glue42 Core documentation ([@flashd2n](https://github.com/flashd2n), [@ValkaHonda](https://github.com/ValkaHonda))

#### :hammer: Underlying Tools
* [#14](https://github.com/Glue42/core/pull/14) Created a rest server, which serves mock data to all Glue42 Core tutorials ([@3lmo](https://github.com/3lmo))

#### Committers: 4
- Kiril Popov ([@kirilpopov](https://github.com/kirilpopov))
- Kalin Kostov ([@flashd2n](https://github.com/flashd2n))
- Emil Petkov ([@3lmo](https://github.com/3lmo))
- Valentin Aleksandrov ([@ValkaHonda](https://github.com/ValkaHonda))