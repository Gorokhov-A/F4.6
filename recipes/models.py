from django.db import models

# Create your models here.


class Recipe(models.Model):
  CATEGORY_CHOICES = [
    ('SD', 'Salad'),
    ('DG', 'Dressing'),
    ('MN', 'Main'),
    ('SP', 'Soup'),
    ('DT', 'Dessert'),
    ('DK', 'Drink'),
  ]
  category = models.CharField(max_length=2, choices=CATEGORY_CHOICES, default='DT')
  title = models.CharField('Title', max_length=200)
  ingredients = models.TextField(max_length=1600)
  directions = models.TextField(max_length=2400)
  img = models.ImageField(upload_to ='static/uploads', null=True, blank=True)
  created = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return  f'{self.getCategory()}: "{self.title}"'
  
  def getCategory(self):
    return f'{dict(self.CATEGORY_CHOICES)[self.category]}'