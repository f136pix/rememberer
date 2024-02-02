<?php declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Models\Task;
use Nuwave\Lighthouse\Execution\ResolveInfo;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

final class Tasks
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke(mixed $root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo)
    {

        // resolver logic
        $query = Task::query();

        // tasks between recieved date
        if (isset($args['start_date']) && isset($args['end_date'])) {
            $query->whereBetween('target_date', [$args['start_date'], $args['end_date']]);
        }

        // where id = requested id
        if (isset($args['user_id'])) {
            $query->where('user_id', $args['user_id']);
        }

        // where id = requested id
        if (isset($args['team_id'])) {
            $query->where('team_id', $args['team_id']);
        }

        // where id = requested id
        if (isset($args['done'])) {
            $query->where('done', $args['done']);
        }

        // orders by target_date
        $query->orderBy('target_date');
        return $query->get();
    }
}
