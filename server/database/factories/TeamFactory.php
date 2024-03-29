<?php

// database/factories/TeamFactory.php

namespace Database\Factories;

use App\Models\Team;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TeamFactory extends Factory
{
    protected $model = Team::class;

    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'creator_id' => function () {
                return User::factory()->create()->id;
            },
        ];
    }
}
