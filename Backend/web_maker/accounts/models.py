from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User (AbstractUser):
    
    name = models.CharField(max_length=200, default='DEFAULT VALUE')
    email = models.CharField(max_length=200, default='DEFAULT VALUE')
    password = models.CharField(max_length=200, default='DEFAULT VALUE')
    username = models.CharField(max_length=200, unique=True, default='DEFAULT VALUE')
    
    REQUIRED_FIELDS = ['name', 'email', 'password']
    
    
class Template(models.Model):
    name = models.CharField(max_length=200, null=True)
    image = models.ImageField(upload_to = 'img')
    html = models.TextField()
    css = models.TextField()
    description = models.CharField(max_length=200, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    
    def __str__(self):
        return self.name



class Website(models.Model):
    STATUS = (
        ('Incomplete', 'Incomplete'),
        ('Completed', 'Completed'),
        ('Hosted', 'Hosted')
    )
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    template = models.ForeignKey(Template, null=True, on_delete=models.SET_NULL)
    name = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    status = models.CharField(max_length=200, null=True, choices=STATUS)

    def __str__(self):
        return self.name

    