<?php

namespace App\Utils;

class Utils
{
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

    public function getTwoInitialsFromNameToUpperCase($name)
    {
        $words = str_replace(' ', '', $name);
        $initials = '';
        for ($i = 0; $i < 2; $i++) {
            $initials .= strtoupper($words[$i]);
        }
        return $initials;
    }
}
