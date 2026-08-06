<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::create(['name' => 'admin']);
        $moderator = Role::create(['name' => 'moderator']);
        $user = Role::create(['name' => 'user']);

        //Settings Permissions
        Permission::create(['name' => 'manage settings']);
        Permission::create(['name' => 'manage uploads']);
        Permission::create(['name' => 'manage notifications']);

        //User Permissions
        Permission::create(['name' => 'view admins']);
        Permission::create(['name' => 'edit admins']);
        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'edit users']);
        Permission::create(['name' => 'create users']);
        Permission::create(['name' => 'delete users']);

        //Post Permissions
        Permission::create(['name' => 'edit posts']);
        Permission::create(['name' => 'view posts']);
        Permission::create(['name' => 'create posts']);
        Permission::create(['name' => 'delete posts']);

        $admin->givePermissionTo(Permission::all());
        $moderator->givePermissionTo(['create posts', 'view posts', 'view admins', 'manage notifications']);
        $user->givePermissionTo(['view posts', 'create posts']);
    }
}
