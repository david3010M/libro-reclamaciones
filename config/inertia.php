<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Testing
    |--------------------------------------------------------------------------
    */

    'testing' => [
        'ensure_pages_exist' => true,
        'page_paths' => [
            resource_path('js/Pages'),
        ],
        'page_extensions' => [
            'js',
            'jsx',
            'svelte',
            'ts',
            'tsx',
            'vue',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Server Side Rendering
    |--------------------------------------------------------------------------
    */

    'ssr' => [
        'enabled' => false,
        'url' => 'http://127.0.0.1:13714',
        'bundle' => base_path('bootstrap/ssr/ssr.js'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Server Side Rendering History Encryption
    |--------------------------------------------------------------------------
    */

    'history' => [
        'encrypt' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Initial Page Element
    |--------------------------------------------------------------------------
    |
    | @inertiajs/react v3+ expects the initial page data to be embedded in a
    | <script data-page="app" type="application/json"> element rather than a
    | data-page attribute on the root div. This must be enabled to match.
    |
    */

    'use_script_element_for_initial_page' => true,

];
