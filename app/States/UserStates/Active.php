<?php

namespace App\States\UserStates;

class Active extends UserState
{
    public static string $name = 'active';

    public function status(): string
    {
        return self::$name;
    }
}
