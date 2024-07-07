<?php

namespace App\States\UserStates;

class Banned extends UserState
{
    public static string $name = 'banned';

    public function status(): string
    {
        return self::$name;
    }
}
