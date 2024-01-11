from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Manufacturer
from .serializers.common import ManufacturerSerializer
from .serializers.populated import PopulatedManufacturerSerializer

# Path: /Manufacturers/
# Methods: GET, POST
class ManufacturerListCreateView(ListCreateAPIView):
    queryset = Manufacturer.objects.all()
    serializer_class = ManufacturerSerializer

# Path: /Manufacturers/:pk/
# Methods: GET, PUT, PATCH, DELETE
class ManufacturerDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Manufacturer.objects.all()
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return PopulatedManufacturerSerializer
        return ManufacturerSerializer
