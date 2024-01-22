from .common import CarSerializer
from reviews.serializers.common import ReviewSerializer
from manufacturer.serializers.common import ManufacturerSerializer

# Inside this populated serializer we provide class attributes for each field we wish to populate. Typically, the name of this field is specified on the foreign key field in which the relationship was defined under the related_name key.
class PopulatedCarSerializer(CarSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)
    manufacturer = ManufacturerSerializer(many=False)