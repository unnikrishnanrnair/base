// **********************************************************************
//
// Copyright (c) 2003-2017 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6.4
//
// <auto-generated>
//
// Generated from file `replayControl.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("ice").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var jderobot = __M.module("jderobot");

    jderobot.ReplayerStatus = Slice.defineEnum([
        ['WAITING', 0], ['PLAYING', 1], ['PAUSED', 2], ['FINISHED', 3]]);

    jderobot.replayControl = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 1,
        [
            "::Ice::Object",
            "::jderobot::replayControl"
        ],
        -1, undefined, undefined, false);

    jderobot.replayControlPrx = Slice.defineProxy(Ice.ObjectPrx, jderobot.replayControl.ice_staticId, undefined);

    Slice.defineOperations(jderobot.replayControl, jderobot.replayControlPrx,
    {
        "pause": [, , , , , [1], , , , , ],
        "resume": [, , , , , [1], , , , , ],
        "setReplay": [, , , , , , [[1]], , , , ],
        "setStep": [, , , , , [1], [[3]], , , , ],
        "getTime": [, , , , , [4], , , , , ],
        "goTo": [, , , , , [1], [[4]], , , , ],
        "getStatus": [, , , , , [jderobot.ReplayerStatus.__helper], , , , , ]
    });
    exports.jderobot = jderobot;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : this.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : this));
