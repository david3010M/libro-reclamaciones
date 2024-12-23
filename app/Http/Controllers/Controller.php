<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function nextCorrelative($model, $field, $length = 8)
    {
        $last = $model::orderBy($field, 'desc')->first();
        $correlative = $last ? $last->$field + 1 : 1;
        return str_pad($correlative, $length, '0', STR_PAD_LEFT);
    }

    public function nextCorrelativeQuery($query, $field, $length = 8)
    {
        $last = $query->orderBy($field, 'desc')->first();
        $correlative = $last ? $last->$field + 1 : 1;
        return str_pad($correlative, $length, '0', STR_PAD_LEFT);
    }
}
