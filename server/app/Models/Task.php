<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Task
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $title
 * @property string $description
 * @property string $target_date
 * @property bool $is_team
 * @property bool $done
 * @property int $priority
 * @property int $team_id
 * @property int $user_id
 * @property-read \App\Models\Team $team
 * @property-read \App\Models\User $user
 * @method static \Database\Factories\TaskFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Task newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Task newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Task query()
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereDone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereIsTeam($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task wherePriority($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereTargetDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereTeamId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Task whereUserId($value)
 * @mixin \Eloquent
 */
class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'target_date',
        'done',
        'priority',
        'is_team'
    ];

    public function team() {
        return $this->belongsTo(Team::class, 'team_id', 'id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');

    }
}
