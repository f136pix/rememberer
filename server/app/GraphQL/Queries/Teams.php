<?php

namespace App\GraphQL\Queries;

use App\Models\Task;
use App\Models\Team;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\UserController;

final class Teams
{
    /**
     * @param null $_
     * @param array{} $args
     */
    public function __invoke($_, array $args)
    {
        // resolver logic

        // retrieve by team id
        if (isset($args['id'])) {
            $query = Team::query();
            $query->find($args['id']);
            return $query->get();
        }

        // retrieve by user id
        if (isset($args['user_id'])) {
            $user = User::find($args['user_id']);

            if ($user) {
                if (isset($args['limit']) && $args['limit'] == true) {
                    $teams = $user->teams->take(3);
                    return $teams;
                }
                $teams = $user->teams;
//                foreach ($teams as $team) {
//                    $tasks = Task::where('team_id', $team->id)->get();
//                    $team->setRelation('tasks', $tasks);
//                }
//                Log::info($teams);

                return $teams;
            }
            return [];
        }
        return [];
    }
}
