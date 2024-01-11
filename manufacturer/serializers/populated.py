from .common import ManufacturerSerializer
from cars.serializers.common import CarSerializer

class PopulatedManufacturerSerializer(ManufacturerSerializer):
    cars = CarSerializer(many=True)