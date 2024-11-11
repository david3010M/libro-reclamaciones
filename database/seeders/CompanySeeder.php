<?php

namespace Database\Seeders;

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder
{
    public function run(): void
    {
        $companies = [
            ['id' => 1, 'name' => 'Mr. Paleta', 'email' => 'mrpaleta@gmail.com', 'logo' => 'logo.png', 'website' => 'https://garzasoft.com'],
        ];

        foreach ($companies as $company) {
            Company::create($company);
        }
    }
}
