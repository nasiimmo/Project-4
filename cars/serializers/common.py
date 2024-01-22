from rest_framework.serializers import ModelSerializer
from ..models import Car
from manufacturer.models import Manufacturer 
from rest_framework import serializers


class CarSerializer(serializers.ModelSerializer):
    manufacturer = serializers.PrimaryKeyRelatedField(
        queryset=Manufacturer.objects.all(),
        many=False,
        required=False  
    )

class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'