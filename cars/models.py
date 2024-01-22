from django.db import models

# Create your models here.
class Car(models.Model):
    make = models.CharField(max_length=255)
    model = models.CharField(max_length=255)
    image = models.URLField()
    year = models.PositiveIntegerField()
    bio = models.TextField(max_length=3000, blank=True, null=True)
    manufacturer = models.ForeignKey(
        to='manufacturer.Manufacturer',
        on_delete=models.CASCADE,
        related_name='cars',
        null=True
    )
    owner = models.ForeignKey(
            to='users.User',
            on_delete=models.CASCADE,
            related_name='owned_cars',
            null=True
        )

    def __str__(self):
        return f'{self.make} - {self.model} ({self.year})'
    
