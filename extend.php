<?php

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js'),

    // (new Extend\Frontend('admin'))->js(__DIR__ . '/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    (new Extend\Settings())->serializeToForum(
        'ianm-level-ranks.pointsText',
        'ianm-level-ranks.pointsText'
    ),
];
