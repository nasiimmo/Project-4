from rest_framework.serializers import ModelSerializer
from ..models import Manufacturer

class ManufacturerSerializer(ModelSerializer):
    class Meta:
        model = Manufacturer
        fields = '__all__'