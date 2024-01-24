<?php

// database/factories/TaskFactory.php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'target_date' => $this->faker->dateTimeBetween('now', '+1 month'),
            'is_team' => $this->faker->boolean,
            'done' => $this->faker->boolean,
            'priority' => $this->faker->numberBetween(1, 5),
            'team_id' => function () {
                return \App\Models\Team::factory()->create()->id;
            },
            'user_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
        ];
    }
}
