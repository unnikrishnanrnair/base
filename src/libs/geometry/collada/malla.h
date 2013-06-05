#ifndef MALLA_H
#define MALLA_H

#include <iostream>
#include <vector>

#include "submalla.h"
#include "material.h"

class Malla
{
public:
    Malla();

    void setPath(const std::string &_path);
    void addSubMalla(SubMalla *_sub);
    int addMaterial(Material *_mat);
    unsigned int getSubMeshCount() const;
    SubMalla *getSubMesh(unsigned int i) const;
    Material *getMaterial(int index);

    math::Vector3 getMax() const;
    math::Vector3 getMin() const;


    /// \brief The name of the mesh
    private: std::string name;

    private: std::string path;

    private: std::vector<SubMalla *> submeshes;
    private: std::vector<Material *> materials;
};

#endif // MALLA_H