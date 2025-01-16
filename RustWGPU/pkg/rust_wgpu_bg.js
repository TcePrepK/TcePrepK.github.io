let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}


function isLikeNone(x) {
    return x === undefined || x === null;
}

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_export_1.set(idx, obj);
    return idx;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_6.get(state.dtor)(state.a, state.b)
});

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_6.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

export function run() {
    wasm.run();
}

function __wbg_adapter_22(arg0, arg1, arg2) {
    wasm.closure4_externref_shim(arg0, arg1, arg2);
}

function __wbg_adapter_27(arg0, arg1, arg2, arg3) {
    wasm.closure7_externref_shim(arg0, arg1, arg2, arg3);
}

function __wbg_adapter_30(arg0, arg1) {
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9b1ef5a725c1e03c(arg0, arg1);
}

function __wbg_adapter_33(arg0, arg1, arg2) {
    wasm.closure851_externref_shim(arg0, arg1, arg2);
}

function __wbg_adapter_44(arg0, arg1, arg2) {
    wasm.closure927_externref_shim(arg0, arg1, arg2);
}

const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];

const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

export function __wbg_Window_781446b33bfaba10(arg0) {
    const ret = arg0.Window;
    return ret;
};

export function __wbg_abort_775ef1d17fc65868(arg0) {
    arg0.abort();
};

export function __wbg_activeElement_367599fdfa7ad115(arg0) {
    const ret = arg0.activeElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_addEventListener_90e553fdce254421() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.addEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments) };

export function __wbg_addListener_2982bb811b6385c5() { return handleError(function (arg0, arg1) {
    arg0.addListener(arg1);
}, arguments) };

export function __wbg_altKey_c33c03aed82e4275(arg0) {
    const ret = arg0.altKey;
    return ret;
};

export function __wbg_altKey_d7495666df921121(arg0) {
    const ret = arg0.altKey;
    return ret;
};

export function __wbg_appendChild_8204974b7328bf98() { return handleError(function (arg0, arg1) {
    const ret = arg0.appendChild(arg1);
    return ret;
}, arguments) };

export function __wbg_blockSize_1490803190b57a34(arg0) {
    const ret = arg0.blockSize;
    return ret;
};

export function __wbg_body_942ea927546a04ba(arg0) {
    const ret = arg0.body;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_button_f75c56aec440ea04(arg0) {
    const ret = arg0.button;
    return ret;
};

export function __wbg_buttons_b6346af6f04e4686(arg0) {
    const ret = arg0.buttons;
    return ret;
};

export function __wbg_call_672a4d21634d4a24() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments) };

export function __wbg_cancelAnimationFrame_089b48301c362fde() { return handleError(function (arg0, arg1) {
    arg0.cancelAnimationFrame(arg1);
}, arguments) };

export function __wbg_cancelIdleCallback_669eb1ed294c8b8b(arg0, arg1) {
    arg0.cancelIdleCallback(arg1 >>> 0);
};

export function __wbg_catch_a6e601879b2610e9(arg0, arg1) {
    const ret = arg0.catch(arg1);
    return ret;
};

export function __wbg_clearTimeout_b2651b7485c58446(arg0, arg1) {
    arg0.clearTimeout(arg1);
};

export function __wbg_close_414b379454494b29(arg0) {
    arg0.close();
};

export function __wbg_code_459c120478e1ab6e(arg0, arg1) {
    const ret = arg1.code;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_contains_3361c7eda6c95afd(arg0, arg1) {
    const ret = arg0.contains(arg1);
    return ret;
};

export function __wbg_contentRect_81407eb60e52248f(arg0) {
    const ret = arg0.contentRect;
    return ret;
};

export function __wbg_createElement_8c9931a732ee2fea() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.createElement(getStringFromWasm0(arg1, arg2));
    return ret;
}, arguments) };

export function __wbg_ctrlKey_1e826e468105ac11(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
};

export function __wbg_ctrlKey_cdbe8154dfb00d1f(arg0) {
    const ret = arg0.ctrlKey;
    return ret;
};

export function __wbg_debug_3cb59063b29f58c1(arg0) {
    console.debug(arg0);
};

export function __wbg_deltaMode_9bfd9fe3f6b4b240(arg0) {
    const ret = arg0.deltaMode;
    return ret;
};

export function __wbg_deltaX_5c1121715746e4b7(arg0) {
    const ret = arg0.deltaX;
    return ret;
};

export function __wbg_deltaY_f9318542caea0c36(arg0) {
    const ret = arg0.deltaY;
    return ret;
};

export function __wbg_devicePixelContentBoxSize_a6de82cb30d70825(arg0) {
    const ret = arg0.devicePixelContentBoxSize;
    return ret;
};

export function __wbg_devicePixelRatio_68c391265f05d093(arg0) {
    const ret = arg0.devicePixelRatio;
    return ret;
};

export function __wbg_disconnect_2118016d75479985(arg0) {
    arg0.disconnect();
};

export function __wbg_disconnect_ac3f4ba550970c76(arg0) {
    arg0.disconnect();
};

export function __wbg_document_d249400bd7bd996d(arg0) {
    const ret = arg0.document;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_error_1004b8c64097413f(arg0, arg1) {
    console.error(arg0, arg1);
};

export function __wbg_error_524f506f44df1645(arg0) {
    console.error(arg0);
};

export function __wbg_error_7534b8e9a36f1ab4(arg0, arg1) {
    let deferred0_0;
    let deferred0_1;
    try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
    }
};

export function __wbg_focus_7d08b55eba7b368d() { return handleError(function (arg0) {
    arg0.focus();
}, arguments) };

export function __wbg_fullscreenElement_a2f691b04c3b3de5(arg0) {
    const ret = arg0.fullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_getCoalescedEvents_a7d49de30111f6b8(arg0) {
    const ret = arg0.getCoalescedEvents();
    return ret;
};

export function __wbg_getCoalescedEvents_c7e4ef019798f464(arg0) {
    const ret = arg0.getCoalescedEvents;
    return ret;
};

export function __wbg_getComputedStyle_046dd6472f8e7f1d() { return handleError(function (arg0, arg1) {
    const ret = arg0.getComputedStyle(arg1);
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments) };

export function __wbg_getElementById_f827f0d6648718a8(arg0, arg1, arg2) {
    const ret = arg0.getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_getOwnPropertyDescriptor_9dd936a3c0cbd368(arg0, arg1) {
    const ret = Object.getOwnPropertyDescriptor(arg0, arg1);
    return ret;
};

export function __wbg_getPropertyValue_e623c23a05dfb30c() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.getPropertyValue(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments) };

export function __wbg_get_b9b93047fe3cf45b(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
};

export function __wbg_height_1f8226c8f6875110(arg0) {
    const ret = arg0.height;
    return ret;
};

export function __wbg_info_3daf2e093e091b66(arg0) {
    console.info(arg0);
};

export function __wbg_inlineSize_8ff96b3ec1b24423(arg0) {
    const ret = arg0.inlineSize;
    return ret;
};

export function __wbg_instanceof_Window_def73ea0955fc569(arg0) {
    let result;
    try {
        result = arg0 instanceof Window;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
};

export function __wbg_isIntersecting_e68706dac9c5f2e9(arg0) {
    const ret = arg0.isIntersecting;
    return ret;
};

export function __wbg_is_c7481c65e7e5df9e(arg0, arg1) {
    const ret = Object.is(arg0, arg1);
    return ret;
};

export function __wbg_key_7b5c6cb539be8e13(arg0, arg1) {
    const ret = arg1.key;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_length_e2d2a49132c1b256(arg0) {
    const ret = arg0.length;
    return ret;
};

export function __wbg_location_9b435486be8f98c2(arg0) {
    const ret = arg0.location;
    return ret;
};

export function __wbg_log_c222819a41e063d3(arg0) {
    console.log(arg0);
};

export function __wbg_matchMedia_bf8807a841d930c1() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
}, arguments) };

export function __wbg_matches_e9ca73fbf8a3a104(arg0) {
    const ret = arg0.matches;
    return ret;
};

export function __wbg_media_552eec81313ef78b(arg0, arg1) {
    const ret = arg1.media;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_metaKey_0b25f7848e014cc8(arg0) {
    const ret = arg0.metaKey;
    return ret;
};

export function __wbg_metaKey_e1dd47d709a80ce5(arg0) {
    const ret = arg0.metaKey;
    return ret;
};

export function __wbg_movementX_1aa05f864931369b(arg0) {
    const ret = arg0.movementX;
    return ret;
};

export function __wbg_movementY_8acfedb38a70e624(arg0) {
    const ret = arg0.movementY;
    return ret;
};

export function __wbg_new_18b1151f3a6a9280() { return handleError(function (arg0) {
    const ret = new IntersectionObserver(arg0);
    return ret;
}, arguments) };

export function __wbg_new_24b2c5b645cded8d() { return handleError(function () {
    const ret = new MessageChannel();
    return ret;
}, arguments) };

export function __wbg_new_405e22f390576ce2() {
    const ret = new Object();
    return ret;
};

export function __wbg_new_5f34cc0c99fcc488() { return handleError(function (arg0) {
    const ret = new ResizeObserver(arg0);
    return ret;
}, arguments) };

export function __wbg_new_8a6f238a6ece86ea() {
    const ret = new Error();
    return ret;
};

export function __wbg_new_e25e5aab09ff45db() { return handleError(function () {
    const ret = new AbortController();
    return ret;
}, arguments) };

export function __wbg_newnoargs_105ed471475aaf50(arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return ret;
};

export function __wbg_now_6f91d421b96ea22a(arg0) {
    const ret = arg0.now();
    return ret;
};

export function __wbg_observe_d2e7378f15f7ca72(arg0, arg1) {
    arg0.observe(arg1);
};

export function __wbg_observe_eafddfc5a0c60e02(arg0, arg1) {
    arg0.observe(arg1);
};

export function __wbg_observe_ed4adb1c245103c5(arg0, arg1, arg2) {
    arg0.observe(arg1, arg2);
};

export function __wbg_offsetX_cca22992ada210f2(arg0) {
    const ret = arg0.offsetX;
    return ret;
};

export function __wbg_offsetY_5e3fcf9de68b3a1e(arg0) {
    const ret = arg0.offsetY;
    return ret;
};

export function __wbg_onpointerrawupdate_d7e65c280dee45ba(arg0) {
    const ret = arg0.onpointerrawupdate;
    return ret;
};

export function __wbg_performance_f71bd4abe0370171(arg0) {
    const ret = arg0.performance;
    return ret;
};

export function __wbg_persisted_d32ce73b8e522062(arg0) {
    const ret = arg0.persisted;
    return ret;
};

export function __wbg_pointerId_585e63ee80a49927(arg0) {
    const ret = arg0.pointerId;
    return ret;
};

export function __wbg_pointerType_6bd934aa20d9db49(arg0, arg1) {
    const ret = arg1.pointerType;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_port1_70af0ea6e4a96f9d(arg0) {
    const ret = arg0.port1;
    return ret;
};

export function __wbg_port2_0584c7f0938b6fe6(arg0) {
    const ret = arg0.port2;
    return ret;
};

export function __wbg_postMessage_e55d059efb191dc5() { return handleError(function (arg0, arg1) {
    arg0.postMessage(arg1);
}, arguments) };

export function __wbg_postTask_076eee2dd6ca2f6c(arg0, arg1, arg2) {
    const ret = arg0.postTask(arg1, arg2);
    return ret;
};

export function __wbg_pressure_adda5a83a9cec94d(arg0) {
    const ret = arg0.pressure;
    return ret;
};

export function __wbg_preventDefault_c2314fd813c02b3c(arg0) {
    arg0.preventDefault();
};

export function __wbg_prototype_cd41f5789d244756() {
    const ret = ResizeObserverEntry.prototype;
    return ret;
};

export function __wbg_queueMicrotask_97d92b4fcc8a61c5(arg0) {
    queueMicrotask(arg0);
};

export function __wbg_queueMicrotask_d3219def82552485(arg0) {
    const ret = arg0.queueMicrotask;
    return ret;
};

export function __wbg_removeEventListener_056dfe8c3d6c58f9() { return handleError(function (arg0, arg1, arg2, arg3) {
    arg0.removeEventListener(getStringFromWasm0(arg1, arg2), arg3);
}, arguments) };

export function __wbg_removeListener_e55db581b73ccf65() { return handleError(function (arg0, arg1) {
    arg0.removeListener(arg1);
}, arguments) };

export function __wbg_removeProperty_0e85471f4dfc00ae() { return handleError(function (arg0, arg1, arg2, arg3) {
    const ret = arg1.removeProperty(getStringFromWasm0(arg2, arg3));
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}, arguments) };

export function __wbg_repeat_1882aa0d0072c705(arg0) {
    const ret = arg0.repeat;
    return ret;
};

export function __wbg_requestAnimationFrame_d7fd890aaefc3246() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestAnimationFrame(arg1);
    return ret;
}, arguments) };

export function __wbg_requestFullscreen_1c019906e2b813ce(arg0) {
    const ret = arg0.requestFullscreen;
    return ret;
};

export function __wbg_requestFullscreen_84eb00d7fc5c44f7(arg0) {
    const ret = arg0.requestFullscreen();
    return ret;
};

export function __wbg_requestIdleCallback_2d7168fc01a73f5c(arg0) {
    const ret = arg0.requestIdleCallback;
    return ret;
};

export function __wbg_requestIdleCallback_e3eefd34962470e1() { return handleError(function (arg0, arg1) {
    const ret = arg0.requestIdleCallback(arg1);
    return ret;
}, arguments) };

export function __wbg_resolve_4851785c9c5f573d(arg0) {
    const ret = Promise.resolve(arg0);
    return ret;
};

export function __wbg_scheduler_344ff4a7a89e57fa(arg0) {
    const ret = arg0.scheduler;
    return ret;
};

export function __wbg_scheduler_dfc2a492974786a1(arg0) {
    const ret = arg0.scheduler;
    return ret;
};

export function __wbg_setAttribute_2704501201f15687() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

export function __wbg_setPointerCapture_c04dafaf4d00ffad() { return handleError(function (arg0, arg1) {
    arg0.setPointerCapture(arg1);
}, arguments) };

export function __wbg_setProperty_f2cf326652b9a713() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    arg0.setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

export function __wbg_setTimeout_461fec76662b35ea() { return handleError(function (arg0, arg1) {
    const ret = arg0.setTimeout(arg1);
    return ret;
}, arguments) };

export function __wbg_setTimeout_f2fe5af8e3debeb3() { return handleError(function (arg0, arg1, arg2) {
    const ret = arg0.setTimeout(arg1, arg2);
    return ret;
}, arguments) };

export function __wbg_set_bb8cecf6a62b9f46() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(arg0, arg1, arg2);
    return ret;
}, arguments) };

export function __wbg_setbox_2786f3ccea97cac4(arg0, arg1) {
    arg0.box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
};

export function __wbg_setonmessage_23d122da701b8ddb(arg0, arg1) {
    arg0.onmessage = arg1;
};

export function __wbg_shiftKey_2bebb3b703254f47(arg0) {
    const ret = arg0.shiftKey;
    return ret;
};

export function __wbg_shiftKey_86e737105bab1a54(arg0) {
    const ret = arg0.shiftKey;
    return ret;
};

export function __wbg_signal_aaf9ad74119f20a4(arg0) {
    const ret = arg0.signal;
    return ret;
};

export function __wbg_stack_0ed75d68575b0f3c(arg0, arg1) {
    const ret = arg1.stack;
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbg_start_2c099369ce831bf1(arg0) {
    arg0.start();
};

export function __wbg_static_accessor_GLOBAL_88a902d13a557d07() {
    const ret = typeof global === 'undefined' ? null : global;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0() {
    const ret = typeof globalThis === 'undefined' ? null : globalThis;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_SELF_37c5d418e4bf5819() {
    const ret = typeof self === 'undefined' ? null : self;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_static_accessor_WINDOW_5de37043a91a9c40() {
    const ret = typeof window === 'undefined' ? null : window;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_style_fb30c14e5815805c(arg0) {
    const ret = arg0.style;
    return ret;
};

export function __wbg_then_44b73946d2fb3e7d(arg0, arg1) {
    const ret = arg0.then(arg1);
    return ret;
};

export function __wbg_unobserve_02f53d1ca2d1d801(arg0, arg1) {
    arg0.unobserve(arg1);
};

export function __wbg_visibilityState_f3cc18a6f3831137(arg0) {
    const ret = arg0.visibilityState;
    return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
};

export function __wbg_warn_4ca3906c248c47c4(arg0) {
    console.warn(arg0);
};

export function __wbg_webkitFullscreenElement_987e215aab12de46(arg0) {
    const ret = arg0.webkitFullscreenElement;
    return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
};

export function __wbg_webkitRequestFullscreen_cdba2299c3040b25(arg0) {
    arg0.webkitRequestFullscreen();
};

export function __wbg_width_cdaf02311c1621d1(arg0) {
    const ret = arg0.width;
    return ret;
};

export function __wbindgen_cb_drop(arg0) {
    const obj = arg0.original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    return ret;
};

export function __wbindgen_closure_wrapper144(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_22);
    return ret;
};

export function __wbindgen_closure_wrapper145(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_22);
    return ret;
};

export function __wbindgen_closure_wrapper146(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 5, __wbg_adapter_27);
    return ret;
};

export function __wbindgen_closure_wrapper1733(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_30);
    return ret;
};

export function __wbindgen_closure_wrapper1734(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_33);
    return ret;
};

export function __wbindgen_closure_wrapper1735(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_33);
    return ret;
};

export function __wbindgen_closure_wrapper1736(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_33);
    return ret;
};

export function __wbindgen_closure_wrapper1737(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_33);
    return ret;
};

export function __wbindgen_closure_wrapper1738(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 852, __wbg_adapter_33);
    return ret;
};

export function __wbindgen_closure_wrapper1954(arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 928, __wbg_adapter_44);
    return ret;
};

export function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
};

export function __wbindgen_init_externref_table() {
    const table = wasm.__wbindgen_export_1;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
    ;
};

export function __wbindgen_is_function(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
};

export function __wbindgen_is_undefined(arg0) {
    const ret = arg0 === undefined;
    return ret;
};

export function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return ret;
};

export function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
};

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

