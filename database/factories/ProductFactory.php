<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => rand(1, 6),
            'picture' => '',
            'name' => $name = str($this->faker->sentence(4))->title(),
            'slug' => str($name)->slug(),
            'price' => rand(10000, 90000),
            'url' => $this->faker->url(),
            'description' => $this->faker->sentence(10)
        ];
    }
}
