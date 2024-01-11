from django.db import models


# Create your models here.
class Review(models.Model):
    text = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    car = models.ForeignKey(
        to='cars.Car',
        on_delete=models.CASCADE, 
        related_name='reviews'
    )