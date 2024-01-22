# Generated by Django 5.0.1 on 2024-01-18 15:05

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cars', '0005_alter_car_bio'),
        ('reviews', '0002_review_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='car',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='cars.car'),
        ),
    ]