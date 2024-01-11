from django.db import models

# Create your models here.
class Car(models.Model):
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    image = models.URLField()
    year = models.PositiveIntegerField()
    manufacturer = models.ManyToManyField(
        to='manufacturer.Manufacturer',
        related_name='cars'
    )

    def __str__(self):
        return f'{self.make} - {self.model} ({self.year})'